import { RedisClient } from "bun";

import { env } from "@/env";

// Define a type for the global object to hold the Redis instance
const globalForRedis = globalThis as unknown as {
  redis: RedisClient | undefined;
};

// Initialize the Redis client using Bun's native implementation
// It automatically reads from REDIS_URL or defaults to localhost:6379
export const redis = globalForRedis.redis ?? new RedisClient(env.REDIS_URL);

if (env.NODE_ENV !== "production") globalForRedis.redis = redis;
