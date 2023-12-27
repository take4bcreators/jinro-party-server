# アプリケーションの起動
# 「-d」は、バックグラウンドでコンテナを起動するオプションです。
docker compose up -d

# アプリケーションの停止
# docker compose down
docker compose down --rmi all

# アプリケーションの再起動
docker compose restart
