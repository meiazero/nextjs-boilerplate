import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import type { PropsWithChildren } from "react";

import "@/styles/globals.css";
import { Header } from "@/components/elements/layout";
import { cn } from "@/lib/utils.js";
import { Providers } from "@/providers";

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
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
