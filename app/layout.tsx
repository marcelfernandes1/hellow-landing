import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hellow.ai"),
  title: {
    default: "Hellow — The AI Receptionist for Local Businesses",
    template: "%s · Hellow",
  },
  description:
    "Hellow is the AI receptionist that answers every call, books appointments, and captures leads 24/7 — so local businesses never miss another customer.",
  keywords: [
    "AI receptionist",
    "answering service",
    "missed calls",
    "appointment booking",
    "small business automation",
    "voice AI",
  ],
  authors: [{ name: "Hellow" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "pt-BR": "/br" },
  },
  openGraph: {
    type: "website",
    title: "Hellow — Never Miss Another Customer Call. Ever.",
    description:
      "The AI receptionist that answers every call, books appointments, and captures leads 24/7.",
    url: "https://hellow.ai",
    siteName: "Hellow",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hellow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellow — Never Miss Another Customer Call. Ever.",
    description:
      "The AI receptionist that answers every call, books appointments, and captures leads 24/7.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
