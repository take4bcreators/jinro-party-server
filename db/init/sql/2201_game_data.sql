COPY prd.game_data
FROM '/tmp/init_data/game_data.csv'
WITH (FORMAT csv, HEADER true)
;

COPY dev.game_data
FROM '/tmp/init_data/game_data.csv'
WITH (FORMAT csv, HEADER true)
;

COPY work.game_data
FROM '/tmp/init_data/game_data.csv'
WITH (FORMAT csv, HEADER true)
;
