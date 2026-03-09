import { DM_Serif_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

export const displayFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const sansFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const monoFont = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
