"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import {
  COLOR_FAMILIES,
  SUBCATEGORIES,
  type BackgroundAsset,
  type ColorFamily,
  type Subcategory,
  type Tier,
} from "@/lib/assets-data";

import { AssetCard } from "./asset-card";

type SubcategoryFilter = Subcategory | "All";
type ColorFilter = ColorFamily | "All";
type TierFilter = Tier | "All";

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-relay-pill border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "border-relay-blue bg-relay-blue-tint text-relay-blue-deep"
          : "border-relay-border bg-relay-white text-relay-secondary hover:text-relay-ink",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function LibraryCatalog({ assets }: { assets: BackgroundAsset[] }) {
  const [query, setQuery] = useState("");
  const [subcategory, setSubcategory] = useState<SubcategoryFilter>("All");
  const [tier, setTier] = useState<TierFilter>("All");
  const [color, setColor] = useState<ColorFilter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return assets.filter((asset) => {
      if (subcategory !== "All" && asset.subcategory !== subcategory)
        return false;
      if (tier !== "All" && asset.tier !== tier) return false;
      if (color !== "All" && asset.colorFamily !== color) return false;
      if (q) {
        const haystack =
          `${asset.title} ${asset.description} ${asset.subcategory} ${asset.colorFamily}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [assets, query, subcategory, tier, color]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <input
            aria-label="Search backgrounds"
            className="w-full rounded-relay-pill border border-relay-border bg-relay-white py-2.5 pl-11 pr-4 text-sm text-relay-ink outline-none placeholder:text-relay-tertiary focus:border-relay-blue/40 focus:ring-3 focus:ring-ring"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search backgrounds…"
            type="search"
            value={query}
          />
          <svg
            aria-hidden
            className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-relay-tertiary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="m20 20-3-3"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wide text-relay-tertiary">
              Type
            </span>
            <FilterPill
              active={subcategory === "All"}
              onClick={() => setSubcategory("All")}
            >
              All
            </FilterPill>
            {SUBCATEGORIES.map((item) => (
              <FilterPill
                key={item}
                active={subcategory === item}
                onClick={() => setSubcategory(item)}
              >
                {item}
              </FilterPill>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wide text-relay-tertiary">
              Color
            </span>
            <FilterPill active={color === "All"} onClick={() => setColor("All")}>
              All
            </FilterPill>
            {COLOR_FAMILIES.map((item) => (
              <FilterPill
                key={item}
                active={color === item}
                onClick={() => setColor(item)}
              >
                {item}
              </FilterPill>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wide text-relay-tertiary">
              Price
            </span>
            {(["All", "free", "premium"] as const).map((item) => (
              <FilterPill
                key={item}
                active={tier === item}
                onClick={() => setTier(item)}
              >
                {item === "All" ? "All" : item === "free" ? "Free" : "Premium"}
              </FilterPill>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-relay-secondary">
        {filtered.length} {filtered.length === 1 ? "background" : "backgrounds"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      ) : (
        <div className="rounded-relay-lg border border-dashed border-relay-border bg-relay-panel px-6 py-16 text-center">
          <p className="text-sm font-medium text-relay-ink">
            No backgrounds match those filters
          </p>
          <p className="mt-1 text-sm text-relay-secondary">
            Try clearing the search or widening your filters.
          </p>
        </div>
      )}
    </div>
  );
}
