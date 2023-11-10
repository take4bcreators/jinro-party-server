FROM node:18-alpine AS base

# builder ステージ開始
FROM base AS builder
WORKDIR /app
COPY ./srcfile/package.json ./srcfile/package-lock.json ./
RUN npm install
COPY ./srcfile .
RUN npm run build

# runner ステージ開始
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]
