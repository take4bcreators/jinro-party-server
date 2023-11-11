
-- COPY prd.player_info
-- FROM '/tmp/init_data/02_player_info.csv'
-- WITH (FORMAT csv, HEADER true)
-- ;

COPY dev.player_info
FROM '/tmp/init_data/02_player_info.csv'
WITH (FORMAT csv, HEADER true)
;

