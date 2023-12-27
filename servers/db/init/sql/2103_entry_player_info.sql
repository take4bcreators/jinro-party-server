
CREATE TABLE prd.entry_player_info (
    game_data_id VARCHAR,
    device_id VARCHAR,
    session_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    entry_player_state VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE dev.entry_player_info (
    game_data_id VARCHAR,
    device_id VARCHAR,
    session_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    entry_player_state VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);
