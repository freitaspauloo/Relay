# Relay

**Relay** is a designer-owned platform to **showcase and sell digital design assets** — starting with **backgrounds**.

It's built as a portfolio project with two jobs to do at once:

1. **Portfolio** — a beautifully crafted showcase that demonstrates the designer's visual craft, taste, and attention to detail. The site itself is a portfolio piece; its polish is part of the product.
2. **Storefront** — a self-serve commerce experience where visitors can browse, preview, license, purchase, and download assets, with both free and premium tiers.

## The idea

I'm a designer, and I want a single home that is both a credibility signal ("this person can design *and* ship a product") and a revenue channel — fully under my own brand and creative control, instead of getting lost in a crowded marketplace that takes a big cut.

## Starting point: backgrounds

The first asset category is **backgrounds** — wallpapers, abstract compositions, gradients, textures, and patterns. The platform is being designed so more categories (icons, illustrations, UI kits, mockups, etc.) can be added later without re-architecting.

## What "done" looks like for the MVP

> A fast, visually stunning site where a visitor can discover backgrounds, view rich previews, buy or download one in under a minute — and where the designer can publish a new asset in under five minutes.

**MVP highlights:**

- Visual, filterable catalog of backgrounds (subcategory, color, orientation, free/premium) + search
- Rich asset detail pages with high-quality previews, in-context mockups, specs, and plain-language licensing
- Free downloads + paid purchases via hosted, PCI-compliant checkout with instant, signed-URL delivery
- Curated collections for storytelling and discovery
- A dead-simple admin flow for uploading, pricing, and publishing assets
- SEO-ready, responsive, accessible, and fast (Core Web Vitals in the "good" range)

## Monetization

- **Free tier** as the funnel (traffic, email capture, trust in file quality)
- **One-off purchases** with clear **Personal** and **Commercial** license tiers
- **Bundles** and, later, an **all-access pass** as the catalog deepens

## Recommended stack (proposed)

Not locked in yet, but the leading recommendation for a solo operator optimizing for SEO, image quality, and polish:

- **Next.js (App Router) + TypeScript** on **Vercel**
- **Tailwind CSS** (+ optional shadcn/ui primitives) and **Framer Motion**
- **Postgres** (Neon/Supabase) with **Prisma or Drizzle**
- Private object storage (**Cloudflare R2 / S3**) with signed-URL delivery
- **Stripe Checkout + Stripe Tax** (or a merchant-of-record like Lemon Squeezy/Paddle) for payments
- Passwordless buyer auth, transactional email (Resend/Postmark), privacy-friendly analytics

## Documentation

- 📄 **[Product Requirements Document](docs/PRD.md)** — the full PRD covering goals, personas, scope, functional/non-functional requirements, data model, licensing, tech stack, KPIs, roadmap, and open questions.

## Status

Greenfield — this repo currently holds the project vision and PRD. Implementation has not started yet.
