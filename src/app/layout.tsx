import type { Metadata } from "next";
import { GeistPixelCircle, GeistPixelSquare } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relay",
  description: "Describe it. See it. Run it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistPixelSquare.variable} ${GeistPixelCircle.variable} h-full antialiased`}
      lang="en"
    >
      <body className="min-h-full font-sans">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
