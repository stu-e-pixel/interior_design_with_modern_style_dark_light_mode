import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "iStudio — Architecture for Everyday Living",
  description: "Explore thoughtful residential and commercial interiors, space planning, material palettes, lighting design and renovation by iStudio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${dmSans.variable} ${playfair.variable}`}><ThemeProvider><SiteHeader/><main>{children}</main><SiteFooter/></ThemeProvider></body></html>;
}
