COPY dev.votes
FROM '/tmp/init_data/05_votes.csv'
WITH (FORMAT csv, HEADER true)
;
