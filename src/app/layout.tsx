import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igniwave | Wellness Intelligence Platform",
  description:
    "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms.",
  metadataBase: new URL("https://igniwave.vercel.app"),
  openGraph: {
    title: "Igniwave | Wellness Intelligence Platform",
    description:
      "Privacy-first, consumer-controlled wellness intelligence. Connect your health data, see meaningful insights, share with your care team on your terms.",
    url: "https://igniwave.vercel.app",
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
