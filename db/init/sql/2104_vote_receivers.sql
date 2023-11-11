
CREATE TABLE prd.vote_receivers (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);

CREATE TABLE dev.vote_receivers (
    game_data_id VARCHAR,
    device_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    PRIMARY KEY(game_data_id, device_id)
);
