
CREATE TABLE prd.player_info (
    game_data_id VARCHAR,
    device_id VARCHAR,
    session_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    player_role VARCHAR,
    player_team VARCHAR,
    player_state VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE dev.player_info (
    game_data_id VARCHAR,
    device_id VARCHAR,
    session_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    player_role VARCHAR,
    player_team VARCHAR,
    player_state VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE work.player_info (
    game_data_id VARCHAR,
    device_id VARCHAR,
    session_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    player_role VARCHAR,
    player_team VARCHAR,
    player_state VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

