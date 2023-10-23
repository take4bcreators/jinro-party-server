COPY work.player_info
FROM '/tmp/init_data/player_info.csv'
WITH (FORMAT csv, HEADER true)
;
