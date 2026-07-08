import Link from "next/link";

import { RelayAppShell } from "@/components/relay-app-shell";

export default function Home() {
  return (
    <div className="relative">
      <RelayAppShell />
      <Link
        className="fixed right-6 top-6 z-50 rounded-relay-pill border border-relay-border bg-relay-white px-4 py-2 text-[13px] font-medium text-relay-secondary shadow-relay-sm transition-colors hover:text-relay-ink"
        href="/assets"
      >
        Assets landing →
      </Link>
    </div>
  );
}
