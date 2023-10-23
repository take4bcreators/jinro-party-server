
-- グループ作成
CREATE GROUP jinrogrp;

-- テーブルへの権限をグループに追加
GRANT ALL ON DATABASE jinrodb TO jinrogrp;

-- グループにユーザを追加
ALTER GROUP jinrogrp ADD USER jinro;

--スキーマの作成
CREATE SCHEMA prd;
CREATE SCHEMA dev;
CREATE SCHEMA work;

-- オブジェクトへのアクセス権限を付与する
GRANT USAGE ON SCHEMA prd TO jinrogrp;
GRANT USAGE ON SCHEMA dev TO jinrogrp;
GRANT USAGE ON SCHEMA work TO jinrogrp;

-- CREATE TABLE などのオブジェクト作成権限を与える
GRANT CREATE ON SCHEMA prd TO jinrogrp;
GRANT CREATE ON SCHEMA dev TO jinrogrp;
GRANT CREATE ON SCHEMA work TO jinrogrp;

-- 既存のテーブルに権限を付与する
GRANT ALL ON ALL TABLES IN SCHEMA prd TO jinrogrp;
GRANT ALL ON ALL TABLES IN SCHEMA dev TO jinrogrp;
GRANT ALL ON ALL TABLES IN SCHEMA work TO jinrogrp;
GRANT ALL ON ALL SEQUENCES IN SCHEMA prd TO jinrogrp;
GRANT ALL ON ALL SEQUENCES IN SCHEMA dev TO jinrogrp;
GRANT ALL ON ALL SEQUENCES IN SCHEMA work TO jinrogrp;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA prd TO jinrogrp;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA dev TO jinrogrp;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA work TO jinrogrp;

-- 今後作成される テーブル へのデフォルト権限を設定する
ALTER DEFAULT PRIVILEGES GRANT ALL ON TABLES TO jinrogrp;
