"use client";

import type { PropsWithChildren } from "react";
import React from "react";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="nx-theme"
      >
        {children}
        <Toaster position="top-right" richColors closeButton duration={3500} />
      </ThemeProvider>
    </React.Fragment>
  );
}
