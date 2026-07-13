<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- **Package manager is pnpm** (`pnpm-lock.yaml` + `pnpm-workspace.yaml`). A stray `package-lock.json` is also committed — ignore it and use pnpm. Standard scripts live in `package.json`: `pnpm dev`, `pnpm build`, `pnpm lint`.
- **`pnpm-workspace.yaml` gates native build scripts** via `allowBuilds` (`sharp`, `unrs-resolver`). These must be `true` for `pnpm install` to build them; if you see them left as placeholder text, set them to `true`.
- **Branch layout is non-obvious:** the runnable Next.js app lives on **`master`**; **`main`** holds only planning docs (`docs/PRD.md`, `COSTS.md`, `BUILD-PLAN.md`) and has no `package.json`. Build/run feature work off `master` (or whatever branch actually contains the app), and target PRs there. The two branches have not been reconciled.
- **Dev server:** `pnpm dev` (Turbopack) serves on `http://localhost:3000`. Routes: `/` (chat app shell), `/assets` (marketing landing), `/library` (background catalog), `/library/[slug]` (asset detail).
- **`pnpm lint` currently fails on pre-existing errors** in the scaffolded assistant-ui chat components (`src/components/reasoning.tsx`, `thread.tsx`, `attachment.tsx`, `ai-elements/prompt-input.tsx`). These are unrelated to the storefront and are NOT introduced by feature work — `pnpm build` succeeds regardless. Don't treat them as your regression.
- **Seed catalog previews render from CSS**, not image files: `src/lib/assets-data.ts` holds background assets whose `css` field is used as an element `background`. A malformed `css` string silently renders a blank preview, so validate visually after edits.
