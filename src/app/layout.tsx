import type { Metadata } from "next";
import { Manrope as Font } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const font = Font({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  variable: "--font-sans",
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Script
        crossOrigin="anonymous"
        src="//unpkg.com/react-scan/dist/auto.global.js"
      />
      <body
        className={cn("bg-background min-h-screen antialiased", font.className)}
      >
        {children}
      </body>
    </html>
  );
}
