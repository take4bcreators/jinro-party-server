

```bash

# Dockerイメージをビルド
docker build -t spring-container-sample .

# イメージの確認
docker images

# 現在のコンテナ確認
docker ps -a

# Dockerコンテナを起動
docker run -d -p 8080:8080 --name spring-container-sample spring-container-sample

# Dockerコンテナを停止
docker stop spring-container-sample


# コンテナを削除（起動中でも強制的に）
docker rm --force spring-container-sample

# ローカルのイメージ削除
docker rmi spring-container-sample


```


