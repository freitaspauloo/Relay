# Relay — Cloud Agent Guide

Relay is a designer-owned platform to showcase and sell digital design assets (starting with backgrounds).

## Project status

Greenfield. Vision, PRD, build plan, and cost sheet live in `docs/`. Implementation has not started on `main` yet.

## Stack (planned)

- Next.js (App Router) + TypeScript + Tailwind CSS on Vercel
- Postgres (Neon/Supabase) with Prisma or Drizzle
- Object storage (R2/S3) with signed-URL delivery
- Stripe Checkout for payments

## Where to start

Follow `docs/BUILD-PLAN.md` in order:

1. Scaffold Next.js + TypeScript + Tailwind
2. Add design system
3. Set up Postgres + ORM + data model

## Key docs

- `docs/PRD.md` — full product requirements
- `docs/BUILD-PLAN.md` — phased implementation steps
- `docs/COSTS.md` — startup cost estimates

## Conventions

- Use TypeScript throughout
- Prefer App Router patterns (Server Components, Server Actions)
- Keep changes focused and match existing style once code exists
- Run `npm run build` and `npm run lint` before finishing when the app is scaffolded
