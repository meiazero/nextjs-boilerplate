import { env } from "@/env.mjs";
import { prisma } from "@/lib/prisma";
import { AUTH_TRUST_HOST } from "../../../next.constants.mjs";
import { githubProvider } from "./providers/github";
import { googleProvider } from "./providers/google";
import {
  DEFAULT_REDIRECT_PAGE,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

export const nextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [googleProvider, githubProvider],

  secret: env.AUTH_SECRET,

  redirectProxyUrl: env.AUTH_REDIRECT_PROXY_URL,

  trustHost: AUTH_TRUST_HOST,

  // Uncomment the following lines to enable the authentication flow with this pages
  // pages: {
  //   signIn: "/auth/sign-in",
  //   error: "/auth/error",
  // },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;

      const isOnPublicPages = publicRoutes.includes(request.nextUrl.pathname);
      const isOnAPIRoutes = request.nextUrl.pathname.startsWith(apiAuthPrefix);
      const isOnAuthRoutes = authRoutes.includes(request.nextUrl.pathname);
      const isOnPrivatePages = !isOnPublicPages;

      // If the user is on a private page, and is not logged in, redirect them to the login page
      if (isOnPrivatePages && !isLoggedIn) {
        return false;
      }

      // If the user is on authentication-related pages, and is not logged in, redirect them to the login page
      if (isOnAuthRoutes && isLoggedIn) {
        return Response.redirect(
          new URL(DEFAULT_REDIRECT_PAGE, request.nextUrl),
        );
      }

      // If the user access a private api endpoint, and is not logged in, return an unauthorized response
      if (isOnAPIRoutes && !isLoggedIn) {
        return Response.json({ message: "Unauthorized." }, { status: 401 });
      }

      return true;
    },
  },

  debug: env.NODE_ENV === "development",
} satisfies NextAuthConfig;

export const { auth, handlers, signOut, signIn } = NextAuth(nextAuthConfig);
