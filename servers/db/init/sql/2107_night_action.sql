
CREATE TABLE prd.night_action (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_role VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    receiver_player_role VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE dev.night_action (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_role VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    receiver_player_role VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);
