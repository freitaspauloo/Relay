"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { RelayButton } from "@/components/relay-ui";
import { LICENSES, type BackgroundAsset, type LicenseKey } from "@/lib/assets-data";

/**
 * License tier picker + purchase CTA for an asset detail page.
 * Checkout itself lands in Phase 2 — for now the CTA reflects the selection
 * and confirms the choice so the flow is demonstrable end to end.
 */
export function LicenseSelector({ asset }: { asset: BackgroundAsset }) {
  const isFree = asset.tier === "free";
  const [license, setLicense] = useState<LicenseKey>("personal");
  const [added, setAdded] = useState(false);

  const selected = LICENSES.find((item) => item.key === license) ?? LICENSES[0];
  const price = isFree ? 0 : Math.round(asset.price * selected.multiplier);

  if (isFree) {
    return (
      <div className="flex flex-col gap-4 rounded-relay-lg border border-relay-border bg-relay-white p-5 shadow-relay-sm">
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-semibold text-relay-ink">Free</span>
          <span className="text-sm text-relay-secondary">
            Personal &amp; commercial use
          </span>
        </div>
        <RelayButton
          className="w-full"
          onClick={() => setAdded(true)}
          variant="primary"
        >
          {added ? "Download started ✓" : "Download free"}
        </RelayButton>
        <p className="text-xs text-relay-tertiary">
          Instant download. No account required.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-relay-lg border border-relay-border bg-relay-white p-5 shadow-relay-sm">
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold text-relay-ink">${price}</span>
        <span className="text-sm text-relay-secondary">one-time</span>
      </div>

      <div className="flex flex-col gap-2">
        {LICENSES.map((item) => {
          const active = item.key === license;
          const itemPrice = Math.round(asset.price * item.multiplier);
          return (
            <button
              key={item.key}
              className={cn(
                "flex items-start justify-between gap-3 rounded-relay-md border p-3 text-left transition-colors",
                active
                  ? "border-relay-blue bg-relay-blue-tint"
                  : "border-relay-border bg-relay-white hover:bg-relay-panel",
              )}
              onClick={() => {
                setLicense(item.key);
                setAdded(false);
              }}
              type="button"
            >
              <span>
                <span className="block text-sm font-semibold text-relay-ink">
                  {item.name}
                </span>
                <span className="mt-0.5 block text-xs text-relay-secondary">
                  {item.blurb}
                </span>
              </span>
              <span className="shrink-0 text-sm font-semibold text-relay-ink">
                ${itemPrice}
              </span>
            </button>
          );
        })}
      </div>

      <RelayButton
        className="w-full"
        onClick={() => setAdded(true)}
        variant="primary"
      >
        {added
          ? `Added to cart ✓ · ${selected.name}`
          : `Add to cart · $${price}`}
      </RelayButton>
      <p className="text-xs text-relay-tertiary">
        Secure checkout &amp; instant download arrive in Phase 2.
      </p>
    </div>
  );
}
