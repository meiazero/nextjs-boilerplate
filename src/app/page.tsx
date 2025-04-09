import type { Metadata } from "next";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 * 'auto' | 'error' | 'force-static' | 'force-dynamic'
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
    title: "Home",
  };
}

export default function HomePage() {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-y-8'>
      <section className='flex flex-col justify-center space-y-8 text-center'>
        <h1 className='text-5xl font-extrabold tracking-tighter text-pretty md:text-7xl'>
          Welcome to Next.js Boilerplate
        </h1>
        <p className='text-muted-foreground mx-auto max-w-sm text-lg text-pretty md:text-xl'>
          This is a Next.js Boilerplate template that helps you get started with
          Next.js and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
