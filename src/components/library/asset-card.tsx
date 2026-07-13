import Link from "next/link";

import { cn } from "@/lib/utils";
import { formatPrice, type BackgroundAsset } from "@/lib/assets-data";

import { AssetPreview } from "./asset-preview";

export function AssetCard({ asset }: { asset: BackgroundAsset }) {
  const isFree = asset.tier === "free";

  return (
    <Link
      className="group flex flex-col gap-3 rounded-relay-lg border border-relay-border bg-relay-white p-3 shadow-relay-sm transition-shadow hover:shadow-relay-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring"
      href={`/library/${asset.slug}`}
    >
      <div className="relative">
        <AssetPreview asset={asset} />
        <span
          className={cn(
            "absolute left-3 top-3 inline-flex items-center rounded-relay-pill px-3 py-1 text-xs font-semibold",
            isFree
              ? "bg-relay-white/90 text-relay-ink backdrop-blur"
              : "bg-relay-ink/85 text-relay-white backdrop-blur",
          )}
        >
          {formatPrice(asset)}
        </span>
      </div>

      <div className="flex items-start justify-between gap-3 px-1 pb-1">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-relay-ink">
            {asset.title}
          </h3>
          <p className="mt-0.5 text-xs text-relay-secondary">
            {asset.subcategory} · {asset.orientation}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1 pt-1">
          {asset.swatches.map((hex) => (
            <span
              key={hex}
              aria-hidden
              className="size-3.5 rounded-full border border-relay-border"
              style={{ background: hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
