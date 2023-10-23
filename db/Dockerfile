FROM postgres:latest

# DB作成用の指定
ENV POSTGRES_USER jinro
ENV POSTGRES_PASSWORD jinro
ENV POSTGRES_DB jinrodb

# 初期化用資材の反映
COPY ./init/sql/ /docker-entrypoint-initdb.d/
COPY ./init/csv/ /tmp/init_data/

EXPOSE 5432
