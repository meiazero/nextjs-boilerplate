import { treaty } from "@elysiajs/eden";

import type { App } from "../app/api/[[...slugs]]/route";

const client = treaty<App>("localhost:3000");

export const api = client.api;
