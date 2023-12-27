COPY dev.vote_receivers
FROM '/tmp/init_data/04_vote_receivers.csv'
WITH (FORMAT csv, HEADER true)
;
