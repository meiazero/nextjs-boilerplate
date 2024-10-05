# syntax=docker/dockerfile:1
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Declare environment variables to be used in the build process
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_VERCEL_REVALIDATE_TIME
ARG NEXT_PUBLIC_STATIC_EXPORT
ARG AUTH_REDIRECT_PROXY_URL
ARG AUTH_SECRET
ARG AUTH_GOOGLE_ID
ARG AUTH_GOOGLE_SECRET
ARG AUTH_GITHUB_ID
ARG AUTH_GITHUB_SECRET
ARG DATABASE_URL

# Set environment variables
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_VERCEL_REVALIDATE_TIME=${NEXT_PUBLIC_VERCEL_REVALIDATE_TIME}
ENV NEXT_PUBLIC_STATIC_EXPORT=${NEXT_PUBLIC_STATIC_EXPORT}
ENV AUTH_REDIRECT_PROXY_URL=${AUTH_REDIRECT_PROXY_URL}
ENV AUTH_SECRET=${AUTH_SECRET}
ENV AUTH_GOOGLE_ID=${AUTH_GOOGLE_ID}
ENV AUTH_GOOGLE_SECRET=${AUTH_GOOGLE_SECRET}
ENV AUTH_GITHUB_ID=${AUTH_GITHUB_ID}
ENV AUTH_GITHUB_SECRET=${AUTH_GITHUB_SECRET}
ENV DATABASE_URL=${DATABASE_URL}


# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN corepack enable pnpm && pnpm generate && pnpm build


# # Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
