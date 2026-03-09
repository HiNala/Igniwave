import type { Metadata } from "next";
import { displayFont, sansFont, monoFont } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igniwave | Wellness Intelligence, On Your Terms",
  description:
    "Connect your health data, see meaningful insights, and share with your care team — all under your control. Privacy-first wellness intelligence.",
  metadataBase: new URL("https://matt-site-ten.vercel.app"),
  openGraph: {
    title: "Igniwave | Wellness Intelligence, On Your Terms",
    description:
      "Connect your health data, see meaningful insights, and share with your care team — all under your control.",
    url: "https://matt-site-ten.vercel.app",
    siteName: "Igniwave",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Igniwave — Wellness Intelligence Platform" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igniwave | Wellness Intelligence, On Your Terms",
    description:
      "Connect your health data, see meaningful insights, and share with your care team — all under your control.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
