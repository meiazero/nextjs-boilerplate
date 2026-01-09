import type { Metadata } from "next";
import { Geist as Font } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const font = Font({
  style: "normal",
  preload: true,
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Boilerplate",
    template: "%s | Next.js Boilerplate",
  },

  description: "A better create-next-app template",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning={true}>
      <Script
        crossOrigin='anonymous'
        src='//unpkg.com/react-scan/dist/auto.global.js'
      />
      <body
        className={cn("bg-background min-h-screen antialiased", font.className)}
      >
        {children}
      </body>
    </html>
  );
}
