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
export const dynamic = "force-static";

/**
 * Configure the dynamicParams option.
 *
 * read more about the dynamicParams option here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
 */
export const dynamicParams = true;

/**
 * Generate the static params for the page.
 *
 * read more about the generateStaticParams option here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#generatestaticparams
 */
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const posts = [{ id: "1" }, { id: "2" }];

  return posts.map(post => ({
    id: post.id,
  }));
}

/**
 * Generate the metadata with dynamic information.
 *
 * Read more about the Dynamic Metadata here:
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: "Post",
  };
}

export default async function PostPage({ params }: ItemPageProps) {
  const p = await params;

  return (
    <div className="container mx-auto space-y-10 px-8 py-6">
      <h1 className="text-4xl font-bold">Example SSG + ISR route</h1>
      <p>ID: {p.id}</p>
    </div>
  );
}
