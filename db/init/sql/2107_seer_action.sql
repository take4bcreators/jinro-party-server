
CREATE TABLE prd.seer_action (
    game_data_id VARCHAR,
    seer_device_id VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    receiver_player_role VARCHAR,
    PRIMARY KEY(game_data_id, seer_device_id)
);

CREATE TABLE dev.seer_action (
    game_data_id VARCHAR,
    seer_device_id VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    receiver_player_role VARCHAR,
    PRIMARY KEY(game_data_id, seer_device_id)
);
