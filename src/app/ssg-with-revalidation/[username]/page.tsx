import type { Metadata } from "next";

interface ItemPageProps {
  params: Promise<{
    username: string;
  }>;
}

/**
 * Configure the revalidation of the page.
 *
 * read more about the revalidate option here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
 */
export const revalidate = 604800; // 7 days

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
    title: "Profile",
  };
}

export default async function ProfilePage({ params }: ItemPageProps) {
  const p = await params;

  return (
    <div className='container mx-auto space-y-10 px-8 py-6'>
      <h1 className='text-4xl font-bold'>
        Example static route (SSG) with revalidation
      </h1>
      <p>Username: {p.username}</p>
    </div>
  );
}
