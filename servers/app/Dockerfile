# ベースイメージの指定
FROM openjdk:17

# コンテナのワーキングディレクトリを設定
WORKDIR /app

# アプリケーションのJARファイルをコンテナにコピー
COPY ./build/*.jar app.jar

# ポートの公開
EXPOSE 8080

# アプリケーションの実行コマンド
ENTRYPOINT ["java", "-jar", "app.jar"]
