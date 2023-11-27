COPY dev.dropout_player_data
FROM '/tmp/init_data/06_dropout_player_data.csv'
WITH (FORMAT csv, HEADER true)
;
