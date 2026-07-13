import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarketingNavbar } from "@/components/marketing-navbar";
import { AssetPreview } from "@/components/library/asset-preview";
import { AssetCard } from "@/components/library/asset-card";
import { LicenseSelector } from "@/components/library/license-selector";
import {
  getAllAssets,
  getAssetBySlug,
  getRelatedAssets,
} from "@/lib/assets-data";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAssets().map((asset) => ({ slug: asset.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);
  if (!asset) return { title: "Not found — Relay" };

  return {
    title: `${asset.title} — Relay`,
    description: asset.description,
  };
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-relay-border py-2.5 last:border-b-0">
      <dt className="text-sm text-relay-secondary">{label}</dt>
      <dd className="text-sm font-medium text-relay-ink">{value}</dd>
    </div>
  );
}

export default async function AssetDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) notFound();

  const related = getRelatedAssets(asset);

  return (
    <div className="min-h-screen bg-background text-relay-ink">
      <MarketingNavbar />
      <main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <nav className="mb-6 text-sm text-relay-secondary">
          <Link className="transition-colors hover:text-relay-ink" href="/library">
            Library
          </Link>
          <span className="px-2 text-relay-tertiary">/</span>
          <span className="text-relay-ink">{asset.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(320px,380px)] lg:gap-12">
          <div className="flex flex-col gap-6">
            <AssetPreview
              asset={asset}
              className="shadow-relay-lg"
              rounded="rounded-relay-lg"
            />
            <div className="flex flex-wrap items-center gap-2">
              {asset.swatches.map((hex) => (
                <span
                  key={hex}
                  className="inline-flex items-center gap-2 rounded-relay-pill border border-relay-border bg-relay-white py-1 pl-1.5 pr-3 text-xs font-medium text-relay-secondary"
                >
                  <span
                    aria-hidden
                    className="size-4 rounded-full border border-relay-border"
                    style={{ background: hex }}
                  />
                  {hex}
                </span>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-relay-blue">
                {asset.subcategory}
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-relay-ink">
                {asset.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-relay-secondary">
                {asset.description}
              </p>
            </div>

            <LicenseSelector asset={asset} />

            <dl className="rounded-relay-lg border border-relay-border bg-relay-white px-4 py-1 shadow-relay-sm">
              <Spec label="Orientation" value={asset.orientation} />
              <Spec label="Dimensions" value={asset.dimensions} />
              <Spec label="Formats" value={asset.formats.join(", ")} />
              <Spec label="File size" value={asset.fileSize} />
              <Spec label="Color" value={asset.colorFamily} />
            </dl>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-relay-ink">
              Related backgrounds
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <AssetCard key={item.id} asset={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
