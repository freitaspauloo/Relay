"use client";

import {
  HeroDitheringActions,
  HeroDitheringBadges,
  HeroDitheringContainer,
  HeroDitheringContent,
  HeroDitheringDescription,
  HeroDitheringHeading,
  HeroDitheringMobileVisual,
  HeroDitheringRoot,
  HeroDitheringVisual,
  NextjsIcon,
} from "@/components/ui/hero-dithering";
import { MarketingNavbar } from "@/components/marketing-navbar";

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <title>Figma</title>
      <path
        d="M8 24a4 4 0 004-4v-4H8a4 4 0 000 8zM4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4zM4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4zM16 0h-4v8h4a4 4 0 100-8zM12 12h4a4 4 0 110 8h-4v-8z"
        fill="currentColor"
      />
    </svg>
  );
}

function TailwindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <title>Tailwind CSS</title>
      <path
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 8c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 15.15 9.47 14 7 14z"
        fill="currentColor"
      />
    </svg>
  );
}

const heroContainerClassName =
  "relative z-10 mx-auto w-full max-w-7xl grid gap-6 px-6 pb-16 pt-8 sm:gap-8 sm:pb-20 lg:grid-cols-[1fr_minmax(320px,560px)] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 xl:grid-cols-[1fr_1fr]";

export function AssetsLandingPage() {
  return (
    <div className="min-h-screen bg-background text-relay-ink">
      <MarketingNavbar />

      <main>
        <HeroDitheringRoot
          className="min-h-[calc(100vh-4rem)] pb-28 lg:pb-0"
          ctaProps={{
            href: "#assets",
            label: "Browse the library",
            target: "_self",
            rel: undefined,
            buttonClassName: "h-11 px-8 text-base",
          }}
          description={
            <>
              Production-ready tokens, components, and patterns for design
              engineers shipping polished product UI. Synced from Figma, built
              with{" "}
              <span className="font-medium tracking-tight">Next.js</span> and{" "}
              <span className="font-medium tracking-tight">Tailwind</span>.
              <span className="hidden sm:inline">
                {" "}
                Copy, paste, and ship faster.
              </span>
            </>
          }
          desktopShaderProps={{
            colorFront: "#2D6BFF",
            scale: 0.75,
            speed: 0.85,
          }}
          mobileShaderProps={{
            colorFront: "#2D6BFF",
            speed: 0.7,
          }}
          srTitle="Assets for design engineers"
          subtitle="Design Engineers"
          title={
            <span className="font-pixel-square">Assets for</span>
          }
          techStack={[
            { name: "Figma", version: "synced", icon: FigmaIcon },
            { name: "Next.js", version: "v16", icon: NextjsIcon },
            { name: "Tailwind", version: "v4", icon: TailwindIcon },
          ]}
        >
          <HeroDitheringContainer className={heroContainerClassName}>
            <HeroDitheringContent>
              <HeroDitheringHeading />
              <HeroDitheringDescription />
              <HeroDitheringActions />
              <div
                className="flex justify-center lg:justify-start"
                data-slot="hero-dithering-badges-wrap"
              >
                <HeroDitheringBadges />
              </div>
            </HeroDitheringContent>
            <HeroDitheringVisual />
          </HeroDitheringContainer>
          <HeroDitheringMobileVisual />
        </HeroDitheringRoot>
      </main>
    </div>
  );
}
