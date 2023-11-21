FROM node:18-alpine AS base

# builder ステージ開始
FROM base AS builder
WORKDIR /app
ADD ./web/srcfile/build.tar.gz ./
RUN npm install
RUN npm run build

# runner ステージ開始
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]
