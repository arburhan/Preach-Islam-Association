import { Fira_Code as FontMono, Inter as FontSans, Noto_Sans_Bengali } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  weight: ["400", "500", "600", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
