# Publishing a macOS release for the website

Do **not** enable the Download button until a real artifact is hosted.

## Recommended: GitHub Releases

1. Build a release package (zip the `.app` or create a DMG).
2. Compute SHA-256:

```bash
shasum -a 256 "OG-Commands-0.1.0-macos.zip"
```

3. Create a GitHub Release and upload the artifact.
4. Update either:

### Option A — JSON

In the **website** repo (`OGCommands-website`), edit `content/releases/macos-latest.json`:

```json
{
  "version": "0.1.0",
  "build": "1",
  "releasedAt": "2026-11-18",
  "downloadUrl": "https://github.com/OWNER/REPO/releases/download/v0.1.0/OG-Commands-0.1.0-macos.zip",
  "checksumSha256": "…",
  "filename": "OG-Commands-0.1.0-macos.zip",
  "signingStatus": "ad-hoc",
  "notes": ["…"]
}
```

### Option B — env (Vercel)

```
NEXT_PUBLIC_MAC_DOWNLOAD_URL=https://…
NEXT_PUBLIC_MAC_DOWNLOAD_SHA256=…
NEXT_PUBLIC_MAC_DOWNLOAD_FILENAME=OG-Commands-0.1.0-macos.zip
NEXT_PUBLIC_MAC_SIGNING_STATUS=ad-hoc
```

Use `developer-id` or `notarized` **only** after those steps are verified.

5. Redeploy the website. The Download page will show an active button only when `downloadUrl` is set.
