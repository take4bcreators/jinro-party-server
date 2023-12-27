FROM node:18-alpine AS base

# builder ステージ
# 資材をコンテナ展開してNext.jsの本番用データとしてビルド
FROM base AS builder
WORKDIR /app
ADD ./build/build.tar.gz ./
RUN npm install
RUN npm run build

# runner ステージ
# ビルドしたデータを builder ステージからコピーして実行
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
EXPOSE 3000
CMD ["node", "server.js"]
