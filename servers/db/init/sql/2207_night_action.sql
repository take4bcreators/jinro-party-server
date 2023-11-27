COPY dev.night_action
FROM '/tmp/init_data/07_night_action.csv'
WITH (FORMAT csv, HEADER true)
;
