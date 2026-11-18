# OG⌘ Commands website

Next.js + TypeScript + Tailwind + MDX documentation for the macOS product.

## Develop

```bash
cd apps/website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Downloads

The Download page stays inactive until a real artifact URL is set:

- `content/releases/macos-latest.json`, or
- `NEXT_PUBLIC_MAC_DOWNLOAD_URL` (+ checksum / signing env vars)

See `../../scripts/publish-macos-release.md`.

## Deploy (Vercel)

1. Import the monorepo in Vercel.
2. Set **Root Directory** to `apps/website`.
3. Build command: `npm run build`
4. Output: Next.js default
5. Set `NEXT_PUBLIC_SITE_URL` to your production domain.

Do not advertise Windows downloads. Do not claim notarization unless verified.
