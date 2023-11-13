COPY dev.seer_action
FROM '/tmp/init_data/07_seer_action.csv'
WITH (FORMAT csv, HEADER true)
;
