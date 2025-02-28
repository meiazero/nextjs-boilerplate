import type { Metadata } from "next";

interface ItemPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 * 'auto' | 'error' | 'force-static' | 'force-dynamic'
 */
export const dynamic = "force-dynamic";

/**
 * Generate the metadata with dynamic information.
 *
 * Read more about the Dynamic Metadata here:
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: "Item",
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const p = await params;

  return (
    <div className="container mx-auto space-y-10 px-8 py-6">
      <h1 className="text-4xl font-bold">
        Example dynamic route (SSG) full dynamic
      </h1>
      <p>ID: {p.id}</p>
    </div>
  );
}
