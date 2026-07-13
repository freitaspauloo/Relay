import { cn } from "@/lib/utils";
import type { BackgroundAsset } from "@/lib/assets-data";

const aspectByOrientation: Record<BackgroundAsset["orientation"], string> = {
  Landscape: "aspect-[16/10]",
  Portrait: "aspect-[3/4]",
  Square: "aspect-square",
};

/**
 * Renders a background asset's preview from its CSS `background` value.
 * Uses a real DOM element (not an <img>) so seed data needs no binary files.
 */
export function AssetPreview({
  asset,
  className,
  rounded = "rounded-relay-lg",
}: {
  asset: BackgroundAsset;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full overflow-hidden",
        rounded,
        aspectByOrientation[asset.orientation],
        className,
      )}
      style={{ background: asset.css }}
    />
  );
}
