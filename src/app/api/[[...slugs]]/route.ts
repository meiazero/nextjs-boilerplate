import { Elysia } from "elysia";
import { z } from "zod";

const app = new Elysia({ prefix: "/api" })
  .get("/", "Hello Nextjs")
  .post("/", ({ body }) => body, {
    body: z.object({
      name: z.string(),
    }),
  });

export type App = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
