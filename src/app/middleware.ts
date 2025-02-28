import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("middleware from: ", pathname);

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
