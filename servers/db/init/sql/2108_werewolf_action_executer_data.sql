
CREATE TABLE prd.werewolf_action_executer_data (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE dev.werewolf_action_executer_data (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);
