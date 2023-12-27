
## Dockerキャッシュ削除

- Dockerfile の VOLUME は予期せずディスクを食い潰す原因になる
- MySQL など多数の公式 Docker イメージで VOLUME が使われているため要注意


### 使用容量確認

```bash
# Docker容量確認
docker system df

# Docker容量確認 (詳細)
docker system df -v
```


### ビルドキャッシュの削除

```bash
# Docker容量確認 (事前)
docker system df

# ビルドキャッシュの削除
docker builder prune
# コマンド実行後 y で進める

# Docker容量確認 (事前)
docker system df
```
