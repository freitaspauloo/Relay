import type { Metadata } from "next";

import { MarketingNavbar } from "@/components/marketing-navbar";
import { LibraryCatalog } from "@/components/library/library-catalog";
import { getAllAssets } from "@/lib/assets-data";

export const metadata: Metadata = {
  title: "Library — Relay",
  description:
    "Browse production-ready background assets — gradients, mesh, patterns, and textures for design engineers.",
};

export default function LibraryPage() {
  const assets = getAllAssets();

  return (
    <div className="min-h-screen bg-background text-relay-ink">
      <MarketingNavbar />
      <main className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <header className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-relay-blue">Backgrounds</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-relay-ink sm:text-5xl">
            The background library
          </h1>
          <p className="mt-4 text-base text-relay-secondary">
            Gradients, mesh, patterns, and textures — crafted for design
            engineers and ready to drop into product UI, decks, and wallpapers.
            Free picks to try, premium picks to ship.
          </p>
        </header>

        <LibraryCatalog assets={assets} />
      </main>
    </div>
  );
}
