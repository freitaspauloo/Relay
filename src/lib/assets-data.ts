/**
 * Relay — seed background-asset catalog.
 *
 * Phase 1 uses a typed, in-repo dataset so the storefront browse + detail
 * experience is fully functional without a database yet. Previews are rendered
 * from CSS (`css` field) rather than binary image files, which keeps the repo
 * light and matches the abstract/gradient nature of the launch category.
 * A later phase swaps this module for real assets backed by Postgres + storage.
 */

export const SUBCATEGORIES = [
  "Gradients",
  "Mesh",
  "Abstract",
  "Patterns",
  "Textures",
] as const;
export type Subcategory = (typeof SUBCATEGORIES)[number];

export const ORIENTATIONS = ["Landscape", "Portrait", "Square"] as const;
export type Orientation = (typeof ORIENTATIONS)[number];

export const COLOR_FAMILIES = [
  "Blue",
  "Purple",
  "Warm",
  "Green",
  "Neutral",
  "Multi",
] as const;
export type ColorFamily = (typeof COLOR_FAMILIES)[number];

export type Tier = "free" | "premium";

export type BackgroundAsset = {
  id: string;
  slug: string;
  title: string;
  subcategory: Subcategory;
  orientation: Orientation;
  colorFamily: ColorFamily;
  tier: Tier;
  /** USD. 0 when free. */
  price: number;
  description: string;
  /** Swatch hexes surfaced on the card + detail page. */
  swatches: string[];
  /** CSS `background` shorthand used to render the preview. */
  css: string;
  formats: string[];
  dimensions: string;
  fileSize: string;
};

export const ASSETS: BackgroundAsset[] = [
  {
    id: "bg-001",
    slug: "aurora-drift",
    title: "Aurora Drift",
    subcategory: "Gradients",
    orientation: "Landscape",
    colorFamily: "Blue",
    tier: "free",
    price: 0,
    description:
      "A calm diagonal wash moving from Relay blue into cyan — a clean, confident hero background for product marketing and app onboarding.",
    swatches: ["#2D6BFF", "#6A5CFF", "#00D4FF"],
    css: "linear-gradient(135deg, #2D6BFF 0%, #6A5CFF 55%, #00D4FF 100%)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "5120×2880",
    fileSize: "8.4 MB",
  },
  {
    id: "bg-002",
    slug: "cobalt-mesh",
    title: "Cobalt Mesh",
    subcategory: "Mesh",
    orientation: "Landscape",
    colorFamily: "Blue",
    tier: "premium",
    price: 16,
    description:
      "Layered radial mesh in deep cobalt and electric blue. Soft, dimensional light that keeps foreground UI perfectly legible.",
    swatches: ["#1B4DD1", "#2D6BFF", "#8AB4FF"],
    css: "radial-gradient(at 18% 22%, #2D6BFF 0px, transparent 55%), radial-gradient(at 82% 18%, #6A5CFF 0px, transparent 50%), radial-gradient(at 60% 88%, #00A3FF 0px, transparent 55%), linear-gradient(160deg, #0B1E52, #112233)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "6000×4000",
    fileSize: "12.1 MB",
  },
  {
    id: "bg-003",
    slug: "sunset-haze",
    title: "Sunset Haze",
    subcategory: "Gradients",
    orientation: "Landscape",
    colorFamily: "Warm",
    tier: "premium",
    price: 12,
    description:
      "Warm dusk gradient from coral to amber. Great for lifestyle decks, podcast art, and cozy landing sections.",
    swatches: ["#FF6B6B", "#FF9F45", "#FFD166"],
    css: "linear-gradient(120deg, #FF6B6B 0%, #FF9F45 50%, #FFD166 100%)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "5120×2880",
    fileSize: "7.8 MB",
  },
  {
    id: "bg-004",
    slug: "violet-bloom",
    title: "Violet Bloom",
    subcategory: "Mesh",
    orientation: "Portrait",
    colorFamily: "Purple",
    tier: "premium",
    price: 18,
    description:
      "A tall, blooming violet mesh built for mobile wallpapers and story backgrounds. Rich without being busy.",
    swatches: ["#7C3AED", "#C026D3", "#F0ABFC"],
    css: "radial-gradient(at 30% 20%, #C026D3 0px, transparent 50%), radial-gradient(at 75% 60%, #7C3AED 0px, transparent 55%), radial-gradient(at 40% 95%, #F0ABFC 0px, transparent 45%), linear-gradient(180deg, #2A1055, #150826)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "1290×2796",
    fileSize: "6.2 MB",
  },
  {
    id: "bg-005",
    slug: "mono-fog",
    title: "Mono Fog",
    subcategory: "Gradients",
    orientation: "Square",
    colorFamily: "Neutral",
    tier: "free",
    price: 0,
    description:
      "A neutral, low-contrast fog for when the content is the star. Subtle grey-to-white falloff, endlessly reusable.",
    swatches: ["#F3F4F6", "#D8DBE0", "#9AA1AC"],
    css: "radial-gradient(at 50% 30%, #FFFFFF 0px, transparent 60%), linear-gradient(160deg, #E9EBEF, #C7CCD4)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "4000×4000",
    fileSize: "3.1 MB",
  },
  {
    id: "bg-006",
    slug: "emerald-tide",
    title: "Emerald Tide",
    subcategory: "Gradients",
    orientation: "Landscape",
    colorFamily: "Green",
    tier: "premium",
    price: 14,
    description:
      "Fresh emerald-to-teal flow with a hint of lime. Signals growth and calm — perfect for fintech and wellness brands.",
    swatches: ["#059669", "#10B981", "#A7F3D0"],
    css: "linear-gradient(135deg, #065F46 0%, #10B981 55%, #A7F3D0 100%)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "5120×2880",
    fileSize: "7.4 MB",
  },
  {
    id: "bg-007",
    slug: "peach-dawn",
    title: "Peach Dawn",
    subcategory: "Mesh",
    orientation: "Portrait",
    colorFamily: "Warm",
    tier: "free",
    price: 0,
    description:
      "Soft peach and rose mesh with a sunrise glow. A gentle, friendly wallpaper that reads beautifully on device.",
    swatches: ["#FDBA74", "#FB7185", "#FECDD3"],
    css: "radial-gradient(at 25% 15%, #FECDD3 0px, transparent 50%), radial-gradient(at 80% 40%, #FB7185 0px, transparent 55%), radial-gradient(at 50% 90%, #FDBA74 0px, transparent 55%), linear-gradient(180deg, #FFF1E6, #FFE4E6)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "1290×2796",
    fileSize: "5.5 MB",
  },
  {
    id: "bg-008",
    slug: "deep-space",
    title: "Deep Space",
    subcategory: "Abstract",
    orientation: "Landscape",
    colorFamily: "Blue",
    tier: "premium",
    price: 22,
    description:
      "A moody, near-black field with a single blue light source. Ideal for dark-mode hero sections and premium product shots.",
    swatches: ["#0B0D12", "#1B4DD1", "#3B82F6"],
    css: "radial-gradient(at 70% 30%, #1E3A8A 0px, transparent 45%), radial-gradient(at 30% 80%, #1B4DD1 0px, transparent 40%), linear-gradient(160deg, #05070D, #0B0D12)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "6000×4000",
    fileSize: "10.9 MB",
  },
  {
    id: "bg-009",
    slug: "prism-flow",
    title: "Prism Flow",
    subcategory: "Abstract",
    orientation: "Landscape",
    colorFamily: "Multi",
    tier: "premium",
    price: 19,
    description:
      "A full-spectrum conic sweep, tuned so no single hue overpowers. Bold, editorial, and unmistakably modern.",
    swatches: ["#2D6BFF", "#F0ABFC", "#FDBA74"],
    css: "conic-gradient(from 210deg at 50% 50%, #2D6BFF, #6A5CFF, #C026D3, #FB7185, #FDBA74, #10B981, #2D6BFF)",
    formats: ["PNG", "JPG", "WEBP"],
    dimensions: "5120×2880",
    fileSize: "9.3 MB",
  },
  {
    id: "bg-010",
    slug: "grid-noise",
    title: "Grid Noise",
    subcategory: "Patterns",
    orientation: "Square",
    colorFamily: "Neutral",
    tier: "free",
    price: 0,
    description:
      "A precise blueprint grid on canvas. Tileable and quiet — a dependable backdrop for docs, dashboards, and diagrams.",
    swatches: ["#FCFCFD", "#E6E8EC", "#2D6BFF"],
    css: "linear-gradient(#E6E8EC 1px, transparent 1px) 0 0 / 32px 32px, linear-gradient(90deg, #E6E8EC 1px, transparent 1px) 0 0 / 32px 32px, #FCFCFD",
    formats: ["PNG", "SVG"],
    dimensions: "4000×4000",
    fileSize: "1.2 MB",
  },
  {
    id: "bg-011",
    slug: "dotted-field",
    title: "Dotted Field",
    subcategory: "Patterns",
    orientation: "Landscape",
    colorFamily: "Blue",
    tier: "premium",
    price: 9,
    description:
      "A soft dot matrix fading into blue. Adds texture and depth to slides and section dividers without the distraction.",
    swatches: ["#2D6BFF", "#8AB4FF", "#EAF1FF"],
    css: "radial-gradient(#2D6BFF 1.5px, transparent 1.6px) 0 0 / 22px 22px, linear-gradient(135deg, #EAF1FF, #FFFFFF)",
    formats: ["PNG", "SVG"],
    dimensions: "5120×2880",
    fileSize: "1.8 MB",
  },
  {
    id: "bg-012",
    slug: "slate-weave",
    title: "Slate Weave",
    subcategory: "Textures",
    orientation: "Landscape",
    colorFamily: "Neutral",
    tier: "premium",
    price: 11,
    description:
      "A fine diagonal weave in slate tones. Understated tactile texture that pairs with almost any brand palette.",
    swatches: ["#334155", "#64748B", "#CBD5E1"],
    css: "repeating-linear-gradient(45deg, #334155 0 6px, #3B4658 6px 12px), linear-gradient(160deg, #475569, #334155)",
    formats: ["PNG", "JPG"],
    dimensions: "5120×2880",
    fileSize: "6.7 MB",
  },
];

export function getAllAssets(): BackgroundAsset[] {
  return ASSETS;
}

export function getAssetBySlug(slug: string): BackgroundAsset | undefined {
  return ASSETS.find((asset) => asset.slug === slug);
}

export function getRelatedAssets(
  asset: BackgroundAsset,
  limit = 3,
): BackgroundAsset[] {
  return ASSETS.filter((candidate) => candidate.id !== asset.id)
    .sort((a, b) => {
      const score = (candidate: BackgroundAsset) =>
        (candidate.subcategory === asset.subcategory ? 2 : 0) +
        (candidate.colorFamily === asset.colorFamily ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function formatPrice(asset: Pick<BackgroundAsset, "tier" | "price">) {
  return asset.tier === "free" ? "Free" : `$${asset.price}`;
}

export const LICENSES = [
  {
    key: "personal" as const,
    name: "Personal",
    blurb: "Personal projects, wallpapers, and non-commercial work.",
    multiplier: 1,
  },
  {
    key: "commercial" as const,
    name: "Commercial",
    blurb: "Client work, products, apps, and marketing.",
    multiplier: 2.5,
  },
];
export type LicenseKey = (typeof LICENSES)[number]["key"];
