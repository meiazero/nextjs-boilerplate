"use client";

import { NavBar } from "@/components/elements/layout";
import { useTheme } from "next-themes";
import React from "react";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleCurrentTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="h-16 w-full border-b border-border/40 bg-background/95">
      <NavBar onThemeTogglerClick={toggleCurrentTheme} />
    </header>
  );
}
