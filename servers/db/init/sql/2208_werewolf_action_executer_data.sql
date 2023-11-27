COPY dev.werewolf_action_executer_data
FROM '/tmp/init_data/08_werewolf_action_executer_data.csv'
WITH (FORMAT csv, HEADER true)
;
