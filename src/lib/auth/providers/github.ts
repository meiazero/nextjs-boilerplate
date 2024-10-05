import { env } from "@/env.mjs";
import GithubProvider from "next-auth/providers/github";

export const githubProvider = GithubProvider({
  clientId: env.AUTH_GITHUB_ID,
  clientSecret: env.AUTH_GITHUB_SECRET,
});
