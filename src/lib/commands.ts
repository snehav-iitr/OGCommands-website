export type CommandCategory = "images" | "files" | "documents" | "ai";

export type CommandStatus = "available" | "macos-only";

export interface CommandDoc {
  id: string;
  name: string;
  alias: string;
  aliases: string[];
  category: CommandCategory;
  summary: string;
  status: CommandStatus;
  featured?: boolean;
  settings: { name: string; detail: string }[];
  formats: string[];
  output: string;
  limitations: string[];
  example: string[];
}

const imageFormats = [
  "JPG/JPEG",
  "PNG",
  "HEIC/HEIF",
  "TIFF",
  "GIF",
  "BMP",
  "WebP",
];

export const commands: CommandDoc[] = [
  {
    id: "compress",
    name: "Compress Images",
    alias: "..compress",
    aliases: ["..compress", "compress"],
    category: "images",
    summary: "Create optimized compressed copies of selected images.",
    status: "available",
    featured: true,
    settings: [
      { name: "Quality", detail: "JPEG/HEIC quality slider (default around 70%)." },
      { name: "Output format", detail: "jpeg or keep original where supported." },
      { name: "Filename suffix", detail: "Default `-compressed`." },
    ],
    formats: imageFormats,
    output: "Compressed image copies in the configured output folder.",
    limitations: [
      "Writes copies only — originals are never overwritten.",
      "Compression gains depend on the source format and quality setting.",
    ],
    example: [
      "Select photos in Finder",
      "Press ⌥Space",
      "Type ..compress and press Return",
    ],
  },
  {
    id: "resize",
    name: "Resize Images",
    alias: "..resize",
    aliases: ["..resize", "resize"],
    category: "images",
    summary: "Resize selected images while preserving aspect ratio.",
    status: "available",
    featured: true,
    settings: [
      { name: "Max width", detail: "Default 1920 px." },
      { name: "Max height", detail: "Default 1080 px." },
      { name: "Output format", detail: "original, jpeg, or png." },
      { name: "Filename suffix", detail: "Default `-resized`." },
    ],
    formats: imageFormats,
    output: "Resized image copies. Aspect ratio is preserved; images are never upscaled past the max bounds.",
    limitations: ["Does not crop. Use ..crop for aspect-ratio crops."],
    example: [
      "Select images in Finder",
      "Press ⌥Space",
      "Type ..resize and press Return",
    ],
  },
  {
    id: "convert",
    name: "Convert Image Format",
    alias: "..convert",
    aliases: ["..convert", "convert"],
    category: "images",
    summary:
      "Convert selected images to another format (PNG, JPEG, HEIC, TIFF, WebP, and more).",
    status: "available",
    featured: true,
    settings: [
      {
        name: "Convert to",
        detail: "JPEG, PNG, HEIC, TIFF, GIF, BMP, or WebP (WebP via libwebp).",
      },
      { name: "Quality", detail: "Applies to JPEG/HEIC/WebP." },
      { name: "Filename suffix", detail: "Default `-converted`." },
    ],
    formats: imageFormats,
    output: "Converted copies with the chosen extension.",
    limitations: [
      "Set the target format in Commands & Settings before running.",
      "Some exotic encodings may fall back depending on macOS ImageIO support.",
    ],
    example: [
      "Open Commands & Settings → Convert Image Format → choose WebP",
      "Select images → ⌥Space → ..convert → Return",
    ],
  },
  {
    id: "crop",
    name: "Crop Images",
    alias: "..crop",
    aliases: ["..crop", "crop"],
    category: "images",
    summary: "Crop selected images to an aspect ratio or inset margins. Writes copies only.",
    status: "available",
    featured: true,
    settings: [
      { name: "Mode", detail: "Aspect ratio or inset %." },
      {
        name: "Aspect ratio",
        detail: "1:1, 4:3, 3:2, 16:9, 9:16, 3:4, 2:3 (center crop).",
      },
      { name: "Inset %", detail: "Trim 0–45% from each side." },
      { name: "Output format", detail: "original, jpeg, or png." },
      { name: "Filename suffix", detail: "Default `-cropped`." },
    ],
    formats: imageFormats,
    output: "Cropped image copies.",
    limitations: ["V1 supports center crop only (no freeform drag handles)."],
    example: [
      "Set Mode to Aspect ratio → 1:1 in Settings",
      "Select images → ⌥Space → ..crop → Return",
    ],
  },
  {
    id: "rotate",
    name: "Rotate Images",
    alias: "..rotate",
    aliases: ["..rotate", "rotate"],
    category: "images",
    summary: "Rotate selected images by a fixed angle. Writes copies only.",
    status: "available",
    settings: [
      { name: "Degrees", detail: "90°, 180°, or 270°." },
      { name: "Direction", detail: "Clockwise or counter-clockwise." },
      { name: "Output format", detail: "original, jpeg, or png." },
      { name: "Filename suffix", detail: "Default `-rotated`." },
    ],
    formats: imageFormats,
    output: "Rotated image copies.",
    limitations: ["Fixed quarter turns only — no arbitrary angles in V1."],
    example: ["Select images → ⌥Space → ..rotate → Return"],
  },
  {
    id: "pdf",
    name: "Images to PDF",
    alias: "..pdf",
    aliases: ["..pdf", "pdf"],
    category: "documents",
    summary: "Combine selected images into a single PDF document.",
    status: "available",
    featured: true,
    settings: [
      { name: "Page size", detail: "Fit image, A4, or Letter." },
      { name: "Filename", detail: "Default `Images.pdf`." },
      { name: "JPEG quality in PDF", detail: "Used when embedding lossy pages." },
    ],
    formats: imageFormats,
    output: "One PDF in the output folder (name conflicts get an incrementing suffix).",
    limitations: ["Page order follows the selection / picker order."],
    example: ["Select images → ⌥Space → ..pdf → Return"],
  },
  {
    id: "duplicate",
    name: "Find Duplicate Images",
    alias: "..duplicate",
    aliases: ["..duplicate", "duplicate"],
    category: "images",
    summary:
      "Detect exact duplicate images among the selection; optionally move extras to Trash after confirmation.",
    status: "available",
    settings: [
      { name: "Match mode", detail: "Exact bytes or exact pixels." },
      { name: "Keep", detail: "First, largest, or newest in each group." },
      {
        name: "Action",
        detail: "Report only (default) or move extras to Trash (requires confirmation).",
      },
    ],
    formats: imageFormats,
    output: "Report of duplicate groups. Trash action moves extras to the system Trash.",
    limitations: [
      "Exact matching only — no perceptual / near-duplicate detection in V1.",
      "Requires at least two images.",
      "Trash moves are never silent.",
    ],
    example: [
      "Select a folder of images → ⌥Space → ..duplicate",
      "Review the report; enable trash action only when you intend to remove extras",
    ],
  },
  {
    id: "gather",
    name: "Gather Files",
    alias: "..gather",
    aliases: ["..gather", "gather"],
    category: "files",
    summary: "Copy selected files of any type into one destination folder.",
    status: "available",
    settings: [
      { name: "Subfolder name", detail: "Default `Gathered` under the output directory." },
      {
        name: "On name conflict",
        detail: "Increment suffix (default) or skip.",
      },
    ],
    formats: ["Any regular file (folders are rejected)"],
    output: "Copied files under the gather destination. Sources are never moved or deleted.",
    limitations: ["Directories are not gathered — select files only."],
    example: ["Select mixed files → ⌥Space → ..gather → Return"],
  },
  {
    id: "removebg",
    name: "Remove Background",
    alias: "..removebg",
    aliases: ["..removebg", "removebg"],
    category: "ai",
    summary:
      "Remove image backgrounds offline with an on-device ONNX model. Writes transparent PNG copies.",
    status: "available",
    featured: true,
    settings: [
      {
        name: "Model",
        detail: "Default `u2netp` (~4.4 MB). Optional `silueta` or full `u2net`.",
      },
      { name: "Hard threshold", detail: "Optional binary mask; soft alpha by default." },
      { name: "Filename suffix", detail: "Default `-nobg`." },
    ],
    formats: imageFormats,
    output: "Transparent PNG copies (`*-nobg.png`). Before/after preview in results.",
    limitations: [
      "Model downloads only after you approve — never silently.",
      "Downloaded weights are SHA-256 verified and cached locally.",
      "CPU inference in V1. Quality varies on hair, glass, and busy scenes.",
      "Model weights are Apache-2.0 (U²-Net); see in-app / docs attribution.",
    ],
    example: [
      "Select a subject photo → ⌥Space → ..removebg",
      "Approve the one-time model download if prompted",
      "Find the transparent PNG in your output folder",
    ],
  },
];

export function getCommand(id: string) {
  return commands.find((c) => c.id === id);
}

export function commandsByCategory(category: CommandCategory) {
  return commands.filter((c) => c.category === category);
}

export const categoryLabels: Record<CommandCategory, string> = {
  images: "Images",
  files: "Files",
  documents: "Documents",
  ai: "On-device AI",
};
