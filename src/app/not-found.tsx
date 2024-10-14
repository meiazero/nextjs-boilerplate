import type { Metadata } from "next";
import React from "react";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = "force-static";

/**
 * Generate the metadata with dynamic information.
 *
 * Read more about the Dynamic Metadata here:
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: "Página não encontrada",
  };
}

export default function NotFoundPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-y-8">
      <section className="container flex flex-col justify-center space-y-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tighter text-pretty md:text-7xl">
          404 - Página não encontrada
        </h1>
        <p className="mx-auto max-w-sm text-muted-foreground text-lg md:text-xl text-pretty">
          Desculpe, mas a página que você está procurando não existe.
        </p>
      </section>
    </main>
  );
}
