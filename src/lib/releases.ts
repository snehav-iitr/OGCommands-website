import fs from "fs";
import path from "path";
import { site } from "./site";

export type SigningStatus = "ad-hoc" | "developer-id" | "notarized";

export interface MacRelease {
  version: string;
  build: string;
  releasedAt: string | null;
  minSystem: string;
  architectures: string[];
  /** Direct download URL for the .zip / .dmg. Empty means not published yet. */
  downloadUrl: string | null;
  checksumSha256: string | null;
  filename: string | null;
  signingStatus: SigningStatus;
  notes: string[];
}

/**
 * Release metadata for the Download page.
 * Populate via content/releases/macos-latest.json or NEXT_PUBLIC_MAC_DOWNLOAD_* env vars.
 */
export function getMacRelease(): MacRelease {
  const envUrl = process.env.NEXT_PUBLIC_MAC_DOWNLOAD_URL?.trim() || null;
  const envChecksum = process.env.NEXT_PUBLIC_MAC_DOWNLOAD_SHA256?.trim() || null;
  const envFilename = process.env.NEXT_PUBLIC_MAC_DOWNLOAD_FILENAME?.trim() || null;
  const envSigning = process.env.NEXT_PUBLIC_MAC_SIGNING_STATUS?.trim() as
    | SigningStatus
    | undefined;

  const fromFile = loadReleaseJson();

  const downloadUrl = envUrl ?? fromFile?.downloadUrl ?? null;
  const checksumSha256 = envChecksum ?? fromFile?.checksumSha256 ?? null;
  const filename = envFilename ?? fromFile?.filename ?? null;
  const signingStatus =
    envSigning ?? fromFile?.signingStatus ?? site.macos.signingStatus;

  return {
    version: fromFile?.version ?? site.macos.version,
    build: fromFile?.build ?? site.macos.build,
    releasedAt: fromFile?.releasedAt ?? null,
    minSystem: site.macos.minSystem,
    architectures: [...site.macos.architectures],
    downloadUrl,
    checksumSha256,
    filename,
    signingStatus,
    notes: fromFile?.notes ?? [
      "Local / CI builds are packaged with scripts/package-app.sh.",
      "Ad-hoc signed only until Developer ID signing and notarization succeed.",
      "Windows is not released yet.",
    ],
  };
}

function loadReleaseJson(): Partial<MacRelease> | null {
  try {
    const filePath = path.join(process.cwd(), "content/releases/macos-latest.json");
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as Partial<MacRelease>;
  } catch {
    return null;
  }
}

export function signingLabel(status: SigningStatus): string {
  switch (status) {
    case "notarized":
      return "Developer ID signed and notarized";
    case "developer-id":
      return "Developer ID signed (not notarized)";
    case "ad-hoc":
      return "Ad-hoc signed only (not Developer ID / not notarized)";
  }
}
