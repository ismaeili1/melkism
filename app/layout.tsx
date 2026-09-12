import ProductHeader from "@/components/layout/ProductHeader";
import ProductFooter from "@/components/layout/ProductFooter";



import type { ReactNode } from "react";



import type { Metadata } from "next";




import { Geist, Geist_Mono } from "next/font/google";




import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_TITLE,
} from "@/lib/seo/seo.constants";




import "./globals.css";

type LayoutProps<T extends string = "/"> = {
  children: ReactNode;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SEO_DEFAULT_TITLE,
  description: SEO_DEFAULT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
<ProductHeader />{children}<ProductFooter />
</body>
    </html>
  );
}


