import { env } from "@/env.mjs";
import GoogleProvider from "next-auth/providers/google";

export const googleProvider = GoogleProvider({
  clientId: env.AUTH_GOOGLE_ID,
  clientSecret: env.AUTH_GOOGLE_SECRET,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
    },
  },
});
