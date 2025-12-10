import type { Metadata } from "next";

import { env } from "@/env";

type MetadataProps = {
  title: string;
  description: string;
  image?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
};

/**
 * Creates a comprehensive Metadata object for Next.js pages.
 *
 * @param props - The metadata properties.
 * @returns The Next.js Metadata object.
 *
 * @example
 * export const metadata = createMetadata({
 *   title: "About Us",
 *   description: "Learn more about our company.",
 * });
 */
export function createMetadata({
  title,
  description,
  image = "/images/og.png",
  icons = "/favicon.ico",
  noIndex = false,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: env.NEXT_PUBLIC_BASE_URL,
      siteName: title,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@meiazero",
    },
    icons,
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
