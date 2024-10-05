import { handlers } from "@/lib/auth/config";

export const runtime = "nodejs";
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime

export const { GET, POST } = handlers;
