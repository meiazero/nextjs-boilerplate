"use client";

import type { PropsWithChildren } from "react";
import React from "react";

import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="nx-theme"
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={3500}
          />
        </ThemeProvider>
      </SessionProvider>
    </React.Fragment>
  );
}
