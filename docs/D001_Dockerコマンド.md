




```bash

# イメージのビルド
#   docker image build パス
#   docker image build --tag リポジトリ名:タグ パス
# Dockerfile のあるディレクトリで行う場合
docker image build --tag jinrodbimg:1.0 .

# イメージの確認
docker images

# 現在のコンテナ確認
docker ps -a

# Postgresコンテナ作成・起動
# docker run --name jinrodb -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d jinrodb:1.0
docker run --name jinrodbcont -p 5432:5432 -d jinrodbimg:1.0

# 接続
# ★ローカルPCに psql がある場合
# psql -h localhost -U postgres -d postgres
# ★ローカルPCに psql がない場合
# docker exec -it jinrodb psql -U postgres -d postgres
docker exec -it jinrodbcont psql -U jinro -d jinrodb


# ★★ setup.sql の内容を実施 ★★


# コンテナを削除（起動中でも強制的に）
docker rm --force jinrodbcont

# ローカルのイメージ削除
docker rmi jinrodbimg:1.0





```








