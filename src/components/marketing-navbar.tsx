import Link from "next/link";

import { Logo01, RelayButton } from "@/components/relay-ui";

const navLinks = [
  { href: "#assets", label: "Assets" },
  { href: "#components", label: "Components" },
  { href: "#docs", label: "Docs" },
];

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-relay-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6 lg:px-8">
        <Link className="shrink-0" href="/assets">
          <Logo01 className="size-10" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-sm text-relay-secondary transition-colors hover:text-relay-ink"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <RelayButton className="hidden sm:inline-flex" variant="nav-secondary">
            Log in
          </RelayButton>
          <RelayButton variant="nav-cta">Get started</RelayButton>
        </div>
      </div>
    </header>
  );
}
