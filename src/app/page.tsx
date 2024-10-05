import { Spotlight } from "@/components/elements/Spotlight";
import React from "react";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <React.Fragment>
      <Spotlight className="-top-0 left-0 md:left-20 md:-top-20 text-foreground" />
      <section className="flex flex-col min-h-[calc(100vh-4rem)] w-full items-center justify-center gap-y-8">
        <div className="container flex flex-col justify-center space-y-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tighter text-pretty md:text-7xl">
            Next.js Boilerplate
          </h1>
          <p className="mx-auto max-w-[550px] text-muted-foreground text-lg md:text-xl text-pretty">
            This boilerplate have installed: Next.js, Typescript, Tailwind CSS,
            and shadcn-ui.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
