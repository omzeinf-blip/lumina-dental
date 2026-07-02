import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd, dentistOrgSchema } from "@/components/seo/json-ld";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://luminadental.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumina Dental — Luxury Cosmetic Dentistry for Your Perfect Smile",
    template: "%s | Lumina Dental",
  },
  description:
    "Lumina Dental is a premier cosmetic dentistry studio delivering bespoke veneers, whitening, and full smile design with meticulous, concierge-level care.",
  keywords: [
    "cosmetic dentistry",
    "luxury dental clinic",
    "porcelain veneers",
    "smile makeover",
    "teeth whitening",
    "Lumina Dental",
  ],
  authors: [{ name: "Lumina Dental" }],
  creator: "Lumina Dental",
  publisher: "Lumina Dental",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lumina Dental",
    title: "Lumina Dental — Luxury Cosmetic Dentistry for Your Perfect Smile",
    description:
      "Bespoke veneers, whitening, and full smile design — crafted with concierge-level precision and care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Dental — Luxury Cosmetic Dentistry for Your Perfect Smile",
    description:
      "Bespoke veneers, whitening, and full smile design — crafted with concierge-level precision and care.",
    creator: "@luminadental",
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1414" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} font-body`}
      >
        <JsonLd data={dentistOrgSchema()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
