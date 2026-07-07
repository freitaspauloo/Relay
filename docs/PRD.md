# Relay — Product Requirements Document

## 1. Overview / Summary

**Relay** is a designer-owned platform for showcasing and selling digital design assets, launching with a curated catalog of **backgrounds** (wallpapers, abstract compositions, gradients, textures, and patterns).

Relay serves a dual purpose:

1. **Portfolio** — a beautifully crafted showcase that demonstrates the designer's visual craft, taste, and attention to detail. The site itself is a portfolio piece; its polish is part of the product.
2. **Storefront** — a self-serve commerce experience where visitors can browse, preview, license, purchase, and download assets, with both free and premium tiers.

The platform is built by and for a **solo designer**: it must be simple to operate (upload, price, publish, fulfill) without a team, while remaining extensible so future asset categories (icons, illustrations, UI kits, mockups) can be added without re-architecting.

**MVP in one sentence:** A fast, visually stunning site where a visitor can discover backgrounds, view rich previews, buy or download one in under a minute, and where the designer can publish a new asset in under five minutes.

---

## 2. Problem Statement & Motivation

### For the designer (seller)

- Existing marketplaces (Creative Market, Gumroad, Envato, etc.) take significant revenue cuts, bury individual creators in crowded catalogs, and impose their own branding and browsing experience — the opposite of a portfolio.
- Generic portfolio sites (Behance, Dribbble, personal sites) showcase work but have no native, polished way to **sell** it.
- The designer needs a single destination that is both a credibility signal ("this person can design and ship a product") and a revenue channel — fully under their own brand, domain, and creative control.

### For buyers

- Finding high-quality, tasteful backgrounds is noisy: stock sites are bloated with low-quality volume; marketplaces have inconsistent quality and confusing licensing.
- Buyers want **curation** (a single strong point of view), **clear licensing** they can understand in one read, **instant delivery**, and confidence in what they're getting (resolution, formats, how it will look in context).

### Why now

- A small, curated catalog from a single designer with a strong aesthetic is a differentiator, not a limitation.
- Modern web tooling makes it feasible for one person to run a fast, secure, high-polish commerce site without a backend team.

---

## 3. Goals and Non-Goals

### Goals

- **G1 — Showcase craft.** The site's visual design, motion, and browsing experience should itself demonstrate the designer's skill. Quality bar: "would this get featured on a design gallery site?"
- **G2 — Sell backgrounds.** Enable one-off purchases and free downloads of background assets with clear licensing and instant delivery.
- **G3 — Frictionless buying.** A visitor can go from landing to a completed download in under a minute, including guest checkout.
- **G4 — Solo-operable.** Uploading, organizing, pricing, and publishing an asset takes minutes; fulfillment is fully automated.
- **G5 — Extensible foundation.** The data model, IA, and URLs are designed so new asset categories can be added later without breaking changes.
- **G6 — Discoverable.** Strong SEO and shareability so assets and collections rank and circulate organically.

### Non-Goals (explicitly out of scope)

- **Multi-vendor marketplace.** Relay is single-seller. No third-party creator onboarding.
- **User-generated content.** No public uploads, comments, or reviews at launch.
- **Subscriptions at MVP.** All-access passes / memberships are a later-phase consideration, not MVP.
- **Custom/commission workflow.** A contact link is fine; a full briefing/quoting system is not in scope.
- **Native mobile apps.** Web-first, responsive.
- **Complex enterprise licensing.** No negotiated contracts, seat management, or invoicing workflows at MVP.
- **AI generation features.** Relay sells human-crafted assets; generation tooling is out of scope.

---

## 4. Target Users & Personas

### Buyer personas

**P1 — Priya, Product Designer (primary)**
- Works at a startup; needs backgrounds for marketing sites, app onboarding screens, presentation decks.
- Values: quality and taste over volume, clear commercial licensing, correct formats/resolutions, fast checkout on a company card.
- Frustration: wading through stock-site noise; ambiguous license terms she has to run past legal.

**P2 — Marcus, Indie Developer / Founder**
- Building an app or landing page solo; no design skills, limited budget.
- Values: free tier to try, cheap one-off purchases, assets that make his product look professional instantly, obvious "can I use this commercially?" answers.
- Frustration: assets that look great in thumbnails but arrive low-res or watermarked.

**P3 — Sofia, Content Creator / Social Media Manager**
- Needs backgrounds for thumbnails, stories, streams, and device wallpapers.
- Values: variety of aspect ratios (vertical, square, ultrawide), trend-aware aesthetics, quick browsing on mobile.
- Frustration: assets offered in only one aspect ratio or resolution.

**P4 — The Appreciator / Fellow Designer (secondary)**
- Browses for inspiration, may download free assets, follows the designer's work.
- Value to Relay: word-of-mouth, backlinks, social sharing, future hiring/collab leads. The portfolio goal (G1) is largely for this audience.

### Seller persona

**P5 — The Designer (owner/operator)**
- Solo designer; strong visual skills, moderate technical comfort. No dedicated engineering or support staff.
- Needs: dead-simple upload and publishing flow, automated payments and delivery, basic sales visibility, and confidence the site won't break or leak paid files.
- Success looks like: publishing weekly drops, growing an audience, generating meaningful side income, and using Relay as proof of product-design ability.

---

## 5. User Stories / Jobs To Be Done

### Buyer stories

- **B1.** As a visitor, I can browse the catalog visually (large previews, minimal chrome) so I can quickly judge whether the style fits my project.
- **B2.** As a visitor, I can filter and search by category, style, color, orientation/aspect ratio, and price (free/premium) so I can narrow to what I need.
- **B3.** As a visitor, I can open an asset detail page with full-quality previews, in-context mockups, and complete specs (dimensions, formats, file size) so I know exactly what I'm buying.
- **B4.** As a visitor, I can understand the license in plain language before purchase so I'm confident about how I may use the asset.
- **B5.** As a visitor, I can download free assets with minimal friction (at most an email capture) so I can try before I buy.
- **B6.** As a buyer, I can purchase as a guest with a card (or wallet like Apple Pay/Google Pay) and receive an instant download link so checkout takes under a minute.
- **B7.** As a buyer, I receive an email receipt with a durable re-download link so I can retrieve files later or on another device.
- **B8.** As a returning buyer with an account, I can see my purchase history and re-download anything I own.
- **B9.** As a visitor, I can browse curated collections (e.g., "Gradient Series 01," "Dark Mode Textures") so I can discover assets by theme.
- **B10.** As a mobile visitor, I can browse, buy, and download comfortably on my phone.

### Designer (admin) stories

- **D1.** As the designer, I can upload an asset with its files (multiple resolutions/formats), previews, title, description, tags, category, collection, and price, then publish it — in one flow, in minutes.
- **D2.** As the designer, I can mark an asset free or premium and set its price and license type per asset.
- **D3.** As the designer, I can create and reorder collections and feature specific assets/collections on the homepage.
- **D4.** As the designer, I can unpublish or edit an asset without breaking existing buyers' download links.
- **D5.** As the designer, I can see a simple dashboard: revenue, orders, top assets, free-download counts.
- **D6.** As the designer, I can trust that source files are never publicly accessible and paid files can't be hotlinked or scraped.
- **D7.** As the designer, I can issue a refund and revoke the associated download access.

---

## 6. Product Scope — MVP vs. Later Phases

### MVP (Phase 1): Browse + sell backgrounds

| Area | In MVP |
|---|---|
| Catalog | Backgrounds only; categories/subcategories (gradients, textures, patterns, abstract, wallpapers); tags; collections |
| Discovery | Visual browse grid, filters (subcategory, color, orientation, free/premium), keyword search, collections |
| Asset pages | Rich previews, watermarked/full-view images, specs, license summary, related assets |
| Commerce | Cart + guest checkout via hosted payment provider; free downloads (with optional email capture); instant delivery via signed links; email receipts with re-download |
| Licensing | Two tiers: Personal and Commercial; plain-language license pages |
| Admin | Auth-protected admin: upload, edit, publish/unpublish, price, organize collections, basic sales dashboard |
| Accounts | Optional buyer accounts (email magic link) for purchase history; guest checkout is the default path |
| Platform | Responsive, SEO-ready, fast image delivery, analytics |

### Phase 2: Growth & polish

- Buyer accounts enriched: favorites/wishlists, library view.
- Discount codes and launch promos; "pay what you want" option for select assets.
- Email list integration and drop announcements (new collection notifications).
- Bundles (buy a collection at a discount).
- Improved search (color-based search from extracted palettes, similarity/related-asset improvements).
- Extended License tier (higher usage rights, higher price).
- Basic analytics deepening: conversion funnels, per-asset views→downloads→purchases.

### Phase 3: Category expansion & recurring revenue

- Second asset category (e.g., icons or UI kits) — validates the extensibility of the data model, IA, and preview system (each category may need category-specific preview types and metadata).
- All-access pass / membership (subscription) with gated library.
- Licensing upgrades (buy Personal, later upgrade to Commercial by paying the difference).
- Localization/multi-currency display if buyer geography warrants it.

### Explicitly deferred indefinitely

- Multi-vendor support, public reviews, affiliate program, API for third parties.

---

## 7. Functional Requirements

Requirements use MoSCoW priorities: **[M]** Must, **[S]** Should, **[C]** Could (all scoped to MVP unless marked Phase 2+).

### 7.1 Browsing, Search & Filtering

- **[M]** Visual catalog grid with lazy-loaded, optimized preview images; infinite scroll or paginated (choose one; must preserve scroll position on back-navigation).
- **[M]** Filter by: subcategory, orientation/aspect ratio (landscape/portrait/square/ultrawide), pricing (free/premium), color family.
- **[M]** Keyword search across title, description, and tags with instant or near-instant results.
- **[M]** Sort by: newest, popular (downloads/purchases), price.
- **[M]** Collections index and collection detail pages (curated groupings with cover art and descriptions).
- **[S]** Filter state reflected in the URL (shareable/bookmarkable filtered views; also aids SEO).
- **[C]** Color extraction from assets to power color filtering automatically (else manually tagged at upload).

### 7.2 Asset Detail Pages

- **[M]** Large, high-quality preview with zoom/full-screen view. Previews are watermarked or resolution-limited derivatives — never the deliverable file.
- **[M]** Specs block: dimensions/resolutions included, file formats (e.g., PNG, JPG, SVG where applicable), total file size, included variants (e.g., 4K, 5K, mobile vertical).
- **[M]** Pricing and license selector (Personal / Commercial) with a one-paragraph plain-language license summary and link to full terms.
- **[M]** Primary CTA: "Download free" or "Add to cart / Buy now" depending on tier.
- **[M]** Related assets (same collection, subcategory, or tags).
- **[S]** In-context mockup previews (asset shown on a device wallpaper, website hero, presentation slide).
- **[S]** Social sharing metadata (Open Graph/Twitter cards) rendering the asset preview beautifully.
- **[C]** Live preview tool (e.g., preview the background at different aspect ratios/crops).

### 7.3 Cart, Checkout & Payments

- **[M]** Cart supporting multiple assets; per-item license selection.
- **[M]** Guest checkout — no account required to purchase.
- **[M]** Payments via a hosted, PCI-compliant provider (recommendation: Stripe Checkout). Card + Apple Pay/Google Pay. Relay never touches raw card data.
- **[M]** Order confirmation page with immediate download access.
- **[M]** Email receipt containing order summary, license summary, and re-download link.
- **[M]** Tax handling: use provider-supported automated tax calculation (e.g., Stripe Tax) or clearly scoped manual configuration; digital-goods VAT/sales-tax obligations must be addressed before accepting international payments.
- **[S]** Refund flow (admin-initiated) that revokes download tokens for that order.
- **[C]** Discount/promo codes (Phase 2).

### 7.4 Free Downloads

- **[M]** Free assets downloadable without payment.
- **[S]** Optional email capture before free download (configurable per asset or globally; must be skippable or clearly value-exchanged to avoid dark-pattern feel).
- **[M]** Free downloads counted in analytics and delivered through the same signed-URL mechanism as paid files.

### 7.5 Licensing

- **[M]** Two license tiers at MVP:
  - **Personal** — non-commercial use (wallpapers, personal projects, mockups not for sale).
  - **Commercial** — use in client work, products, marketing, monetized content; defined reasonable limits (see §11).
- **[M]** Each order records the exact license tier and license version purchased (licenses are versioned; changes never retroactively alter past purchases).
- **[M]** Full license terms on a dedicated page; plain-language summary at point of sale.
- **[S]** License text included in the download package or receipt email.

### 7.6 Downloads & Delivery

- **[M]** Files stored in private object storage; delivered only via expiring signed URLs generated after entitlement verification.
- **[M]** Durable re-download: receipt email links to an order page that can mint fresh signed URLs (rate-limited).
- **[M]** Multi-file assets delivered as a ZIP (or per-file downloads) — decided per asset at upload.
- **[M]** Download links resilient to asset file updates (buyers get the latest version; version noted in filenames or changelog).
- **[S]** Per-order download limits/rate limiting to deter link sharing (generous — never punish legitimate buyers).

### 7.7 Designer Admin (Upload & Management)

- **[M]** Secure admin area (strong auth — passkey or password + 2FA; single admin user is acceptable at MVP).
- **[M]** Asset creation flow: upload deliverable files + preview images, auto-generate optimized preview derivatives, enter metadata (title, slug, description, tags, subcategory, orientation, collection), set tier/price/license availability, save as draft, publish.
- **[M]** Edit and unpublish without breaking existing purchase entitlements.
- **[M]** Collection management: create, edit, order assets within, set cover, feature on homepage.
- **[M]** Orders view: list of orders with status, buyer email, items; refund action.
- **[S]** Dashboard: revenue over time, orders, top assets, free-download counts, traffic summary (or link out to analytics tool).
- **[C]** Bulk upload / CSV metadata import (Phase 2, useful for large drops).

### 7.8 Accounts & Auth

- **[M]** Buyer accounts are **optional**; guest checkout is first-class. Orders are keyed to email.
- **[M]** Passwordless auth for buyers (email magic link or code) to view purchase history and re-download.
- **[S]** Post-purchase prompt: "Save this order to an account" (claims guest orders by verified email).
- **[M]** Admin auth is separate and hardened (see 7.7).

### 7.9 Content & Marketing Pages

- **[M]** Homepage: hero showcasing featured collection/assets, curated highlights, entry points to browse. This page carries the heaviest portfolio weight — highest design/motion polish.
- **[M]** About page: the designer's story, craft, and process (portfolio credibility).
- **[M]** License, Terms, Privacy, and Contact/Support pages.
- **[S]** Simple journal/changelog for drops (aids SEO and return visits; can be Phase 2).

---

## 8. Non-Functional Requirements

### Performance
- Largest Contentful Paint < 2.0s on 4G for catalog and asset pages; Core Web Vitals in the "good" range across the site.
- Image-heavy pages must use responsive images, modern formats (AVIF/WebP with fallbacks), lazy loading, and blur-up/dominant-color placeholders (placeholders are also an aesthetic opportunity).
- Catalog interactions (filter, sort, search) feel instant (< 200ms perceived).

### Image Delivery & Optimization
- All previews served via CDN with on-the-fly resizing/format negotiation.
- Deliverable files never pass through the public CDN cache; signed URLs only.
- Preview derivatives generated automatically at upload (multiple sizes, watermarked where applicable) — never manual.

### SEO
- Server-rendered (or statically generated) catalog, collection, and asset pages with unique titles/descriptions, canonical URLs, and `Product` structured data (JSON-LD).
- Clean, stable, human-readable URLs: `/backgrounds/gradients/aurora-drift-01`. Category segment in the path supports future categories.
- Sitemap, robots, Open Graph/Twitter images per asset and collection.

### Accessibility
- WCAG 2.1 AA target: full keyboard navigability, visible focus states, alt text for all previews (entered at upload), sufficient contrast in UI chrome, motion-reduction respect (`prefers-reduced-motion`), accessible forms and checkout.
- Note: a visually rich site is not exempt — accessible polish is part of the portfolio statement.

### Security
- HTTPS everywhere; HSTS. No card data touches Relay servers (hosted checkout).
- Private storage for deliverables; expiring signed URLs; entitlement checks server-side on every download mint.
- Admin: strong auth, session hardening, audit-relevant logging of admin actions.
- Payment webhook signature verification; idempotent order fulfillment.
- Standard protections: rate limiting on download/auth endpoints, input validation, dependency updates.

### Privacy & Compliance
- Minimal data collection (email + order data). Clear privacy policy. Cookie-consent handling appropriate to buyer geographies. GDPR-friendly analytics preferred.

### Responsiveness & Compatibility
- Fully responsive from 360px to ultrawide. Touch-friendly browsing and checkout. Last two major versions of evergreen browsers.

### Reliability & Operability
- Checkout and download paths are the critical availability surface; degraded browse is tolerable, failed fulfillment is not.
- Automated backups of the database; storage redundancy via cloud provider.
- Error monitoring and alerting suitable for a solo operator (email/push on payment or fulfillment failures).

---

## 9. Information Architecture & Key Pages/Screens

```
Home
├── Browse (/backgrounds)                 ← category root; future: /icons, /ui-kits …
│   ├── Subcategory views (/backgrounds/gradients, /textures, …)
│   └── Asset detail (/backgrounds/{subcategory}/{slug})
├── Collections (/collections)
│   └── Collection detail (/collections/{slug})
├── Search results (/search?q=…)
├── Cart (/cart) → Checkout (hosted) → Order confirmation (/orders/{token})
├── Free downloads entry (filtered browse view, /backgrounds?tier=free)
├── About (/about)
├── License (/license) · Terms · Privacy · Contact
├── Account (/account)
│   ├── Purchase history & re-downloads
│   └── Sign in (magic link)
└── Admin (/admin) — auth-gated
    ├── Assets (list, create, edit)
    ├── Collections
    ├── Orders (+ refunds)
    └── Dashboard
```

**Key screens and their jobs:**

| Screen | Primary job | Design notes |
|---|---|---|
| Home | Impress + route to browse | Hero-level polish; featured collection; motion welcome here |
| Browse grid | Fast visual scanning | Dense but breathable grid; sticky filters; instant feedback |
| Asset detail | Convert (buy/download) | Big preview, zoom, mockups, specs, unambiguous CTA + license clarity |
| Collection detail | Curated storytelling | Editorial layout; collection narrative; portfolio moment |
| Cart/checkout | Zero-friction purchase | Hosted checkout; minimal steps; trust signals |
| Order confirmation | Deliver instantly | Prominent download buttons; account-save prompt |
| Admin upload | 5-minute publish | Drag-and-drop, auto-derivatives, sensible defaults |

---

## 10. Data Model (High Level)

Entities and key relationships (illustrative, not a schema spec):

- **Category** — `id, slug, name, description, sort_order`. MVP has one ("backgrounds") but the entity exists from day one (G5).
- **Subcategory** — `id, category_id, slug, name` (gradients, textures, patterns, abstract, wallpapers).
- **Asset** — `id, slug, title, description, category_id, subcategory_id, status (draft/published/unpublished), tier (free/premium), price(s) per license, orientation, color_tags, tags[], specs (dimensions, formats, file_size), published_at, alt_text`.
- **AssetFile** — `id, asset_id, storage_key (private), variant_label (e.g. "5K", "mobile"), format, checksum, version`. Deliverables; never public.
- **AssetPreview** — `id, asset_id, image_key, kind (grid, detail, mockup, og), sort_order`. Public, CDN-served derivatives.
- **Collection** — `id, slug, name, description, cover_preview_id, featured (bool), sort_order`; many-to-many **CollectionAsset** with position.
- **License** — `id, key (personal/commercial), name, version, summary, full_text, active`. Versioned; orders reference a specific version.
- **User** — `id, email, role (buyer/admin), created_at`. Buyers are optional accounts; guest orders link by email and can be claimed.
- **Order** — `id, email, user_id (nullable), payment_provider_ref, status (pending/paid/refunded), totals, tax, created_at`.
- **OrderItem** — `id, order_id, asset_id, license_id + license_version, unit_price`. This is the durable **entitlement** record.
- **DownloadToken/Event** — `id, order_item_id (or asset_id for free), token, expires_at, download_count`. Powers signed delivery, re-downloads, limits, and analytics.
- **EmailCapture** *(optional)* — `email, source (free_download/newsletter), consent, created_at`.

**Design principles:**
- Entitlements (OrderItems) are immutable and survive asset edits/unpublishing (D4).
- Category is a first-class dimension in data and URLs so Phase 3 categories are additive.
- All deliverable access is mediated by entitlement checks + short-lived tokens; no direct storage URLs anywhere.

---

## 11. Monetization & Licensing Model

### Revenue model (MVP)

- **One-off purchases** of premium assets. Suggested anchor pricing (final pricing is the designer's call):
  - Personal license: ~$6–$12 per asset
  - Commercial license: ~$19–$39 per asset
- **Free tier** as the funnel: a rotating selection of free assets drives traffic, email capture, social sharing, and trust in file quality.
- **Bundles** (Phase 2): collection bundles at ~30–40% off the sum of items.
- **All-access pass** (Phase 3): one-time "everything" purchase or subscription — only once the catalog is deep enough to justify it.

### License tiers

| Tier | Permitted | Not permitted |
|---|---|---|
| **Free** | Personal use; commercial use with attribution (or per designer's preference — decide before launch) | Redistribution/resale of the file itself |
| **Personal** | Wallpapers, personal projects, non-monetized use | Any commercial use; redistribution |
| **Commercial** | Client work, apps/websites, marketing, monetized content, print (reasonable run limits) | Reselling/redistributing the asset as-is or in asset packs/templates; trademark use |
| **Extended** *(Phase 2)* | Everything in Commercial + products-for-resale where the asset is a core component, large-run print, broadcast | Redistribution as a standalone asset |

**Licensing principles:**
- One-page, plain-language license with a "human summary" at point of sale; buyers should never need a lawyer for a background image.
- All tiers are perpetual, non-exclusive, and non-transferable. Licenses versioned; each order pins its version.
- Universal prohibition across tiers: redistributing or reselling the raw files (including in template/asset bundles).

---

## 12. Suggested Tech Stack (Recommendation)

> This is a **recommendation**, not a mandate — final choices belong to whoever builds it. The rationale is optimized for a solo operator: minimal ops, best-in-class image handling, strong SEO, and high polish per hour invested.

| Layer | Recommendation | Rationale |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSR/SSG for SEO-critical catalog pages, built-in image optimization, one codebase for storefront + admin + API routes; huge ecosystem |
| Styling / UI | **Tailwind CSS**, optionally with shadcn/ui primitives; **Framer Motion** for motion | Fast iteration on custom, highly polished design (this is a portfolio — avoid off-the-shelf themes); accessible primitives without visual lock-in |
| Database | **Postgres** (managed: Neon or Supabase) + **Prisma or Drizzle** ORM | Relational fit for orders/entitlements; managed = zero ops; typed ORM for solo maintainability |
| File storage | **Cloudflare R2 or AWS S3** (private buckets) with signed URLs | Cheap, durable, standard signed-URL delivery; R2 has no egress fees (relevant for large image files) |
| Image/CDN | **Vercel Image Optimization or Cloudflare Images** for previews | On-the-fly resizing, AVIF/WebP, global CDN — critical for an image-heavy site |
| Payments | **Stripe Checkout + Stripe Tax + webhooks** | Hosted, PCI-compliant, wallets included, automated digital-goods tax; webhook-driven fulfillment is a well-trodden path. (Alternative: **Lemon Squeezy/Paddle** as merchant of record — trades fees for fully outsourced global tax compliance; seriously consider if international tax handling is a concern) |
| Auth | **Auth.js (NextAuth) or Clerk** — email magic links for buyers; hardened credentials/passkey for admin | Passwordless matches the low-friction buyer model |
| Email | **Resend or Postmark** with React Email templates | Reliable transactional receipts/download links |
| Search/filtering | Postgres full-text + indexed filters at MVP; **Typesense/Meilisearch/Algolia** if catalog grows | Don't add a search service before the catalog needs it |
| Analytics | **Plausible or Fathom** (privacy-friendly) + Stripe dashboard | Lightweight, GDPR-friendly, sufficient for KPIs |
| Hosting | **Vercel** | First-class Next.js support, previews, zero-ops for a solo operator |
| Monitoring | **Sentry** + provider alerts | Catch fulfillment failures fast |

**Key architectural notes:**
- Fulfillment is **webhook-driven and idempotent**: Stripe `checkout.session.completed` → create Order/OrderItems → email receipt. Never fulfill from the client redirect alone.
- Admin lives in the same app behind role-gated routes — no separate CMS needed at MVP, though a headless CMS (e.g., Sanity) is a reasonable alternative for asset metadata if the designer prefers editing there.

---

## 13. Success Metrics / KPIs

### North star
- **Revenue per month** (trend, not absolute target at launch) and **portfolio impact** (inbound opportunities attributable to Relay).

### Commerce funnel
- Visitor → asset-detail view rate
- Asset view → (free download OR add-to-cart) rate
- Cart → completed purchase conversion (target: > 60% given hosted checkout)
- Overall visitor → purchase conversion (healthy digital-goods benchmark: 1–3%)
- Average order value; refund rate (< 2%)

### Engagement & discovery
- Free downloads per month; free-download → later-purchase rate (funnel validation)
- Email captures and list growth
- Organic search impressions/clicks for asset and collection pages; assets ranking for "{style} background" queries
- Return-visitor rate; social referral traffic (Dribbble, X, Pinterest)

### Portfolio signal
- Features/mentions on design galleries and newsletters; backlinks
- Direct inquiries (hiring, collaboration, commissions) via the contact page

### Operational (solo-friendliness)
- Time to publish a new asset (target: < 5 minutes)
- Fulfillment failure rate (target: ~0; every failure alerts)
- Support requests per 100 orders (proxy for UX/licensing clarity)

### Quality
- Core Web Vitals pass rate; Lighthouse accessibility ≥ 95 on key templates

---

## 14. Milestones / Phased Roadmap

> Phases, not dates. Each phase ends with a shippable state and explicit validation before proceeding.

### Phase 0 — Foundation & Design Language
- Brand, visual language, and high-fidelity designs for the five key templates (home, browse, asset detail, collection, checkout/confirmation).
- Finalize license texts and pricing; decide Stripe vs. merchant-of-record for tax.
- Data model and URL structure locked (category-extensible).
- **Exit criteria:** designs approved by the designer; licensing/pricing/tax approach decided.

### Phase 1 — MVP Build & Launch
- Catalog (browse/filter/search), asset detail, collections.
- Checkout (guest), payments, webhook fulfillment, signed downloads, receipts, re-download.
- Free-download flow. Admin upload/manage. SEO, analytics, monitoring, legal pages.
- Seed catalog: an initial curated drop (suggested: 30–60 backgrounds across subcategories, with a meaningful free selection).
- **Exit criteria:** end-to-end test purchases and downloads succeed (including refund + revocation); Core Web Vitals green; launch announcement shipped.

### Phase 2 — Growth & Polish
- Buyer favorites/library, discount codes, bundles, email drop announcements.
- Color-based search, related-asset improvements, in-context mockup previews expanded.
- Extended license tier. Conversion-funnel instrumentation and iteration based on Phase 1 data.
- **Exit criteria:** measurable lift in conversion or repeat purchases; email list growing; ops still < a few hours/week.

### Phase 3 — Category Expansion & Recurring Revenue
- Launch second asset category (icons or UI kits) reusing the category-extensible foundation; category-specific preview treatments.
- All-access pass / membership evaluation and (if catalog depth supports it) launch.
- License-upgrade purchases; multi-currency display if warranted.
- **Exit criteria:** second category live without re-architecture; recurring-revenue decision made on real data.

---

## 15. Risks & Open Questions

### Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Traffic/demand risk** — beautiful store, no visitors | High | High | Free tier as funnel; SEO from day one; leverage designer's existing audience (Dribbble/X/Instagram); regular "drops" as marketing events |
| **File piracy / link sharing** | Medium | Medium | Signed expiring URLs, rate limits, watermarked previews; accept that determined piracy is unpreventable — optimize for legitimate-buyer experience, not DRM |
| **Tax/compliance complexity** for international digital sales | Medium | High | Stripe Tax, or a merchant-of-record (Lemon Squeezy/Paddle) to outsource entirely; decide in Phase 0 |
| **Solo-operator bandwidth** — building, designing, and marketing compete for the same hours | High | Medium | Ruthless MVP scope; hosted services over custom infra; automate fulfillment fully; admin flow speed as a tracked KPI |
| **Scope creep** ("portfolio polish" is unbounded) | High | Medium | Polish budget concentrated on the five key templates; ship, then iterate |
| **Catalog depth** — small catalog may feel thin at launch | Medium | Medium | Frame as "curated drops," not a stock library; collections make a small catalog feel intentional |
| **Platform dependence** (Stripe/Vercel policy or pricing changes) | Low | Medium | Standard patterns and portable data model; entitlements owned in Relay's DB, not the payment provider |
| **Licensing disputes/confusion** | Low | Medium | Plain-language licenses, license pinned per order, receipts include terms |

### Open Questions

1. **Free-tier licensing:** Do free assets permit commercial use (max reach) or personal-only (stronger upsell)? Attribution required?
2. **Merchant of record vs. Stripe:** Is the designer willing to handle tax registration thresholds, or should Relay pay higher fees to outsource compliance entirely?
3. **Email capture on free downloads:** Required, optional, or skipped at launch? (Tension between list growth and frictionless portfolio feel.)
4. **Watermarking previews:** Visible watermark (deters scraping, hurts aesthetics) vs. resolution-limited clean previews (prettier, easier to scrape)?
5. **Pricing validation:** Anchor prices are hypotheses — validate against comparable curated sellers before launch, and revisit after first-month data.
6. **Personal vs. Commercial split:** Is a two-tier model worth the checkout complexity at MVP, or should MVP ship a single "use it for almost anything" license and add tiers later?
7. **Drop cadence:** What publishing rhythm (e.g., a new collection per drop) can the designer sustainably commit to? This drives return visits and email strategy.
8. **Brand relationship:** Is Relay its own brand, or explicitly "{Designer Name}'s shop"? Affects domain, About page, and long-term positioning.
9. **Second category candidate:** Which Phase 3 category (icons, UI kits, illustrations) best fits the designer's pipeline? Preview/mockup needs differ significantly per category.
10. **Analytics depth:** Is privacy-friendly page analytics + Stripe enough, or is per-asset funnel instrumentation needed from day one?
