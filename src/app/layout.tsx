import type { Metadata } from "next";
import { displayFont, sansFont, monoFont } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igniwave | Wellness Intelligence Platform",
  description:
    "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms.",
  metadataBase: new URL("https://matt-site-ten.vercel.app"),
  openGraph: {
    title: "Igniwave | Wellness Intelligence Platform",
    description:
      "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms.",
    url: "https://matt-site-ten.vercel.app",
    siteName: "Igniwave",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igniwave | Wellness Intelligence Platform",
    description:
      "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms.",
  },
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
