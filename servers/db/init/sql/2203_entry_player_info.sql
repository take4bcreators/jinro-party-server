COPY dev.entry_player_info
FROM '/tmp/init_data/03_entry_player_info.csv'
WITH (FORMAT csv, HEADER true)
;
