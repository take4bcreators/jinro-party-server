
CREATE TABLE prd.game_data (
    game_data_id VARCHAR,
    game_state VARCHAR,
    game_mode VARCHAR,
    is_end BOOLEAN,
    PRIMARY KEY(game_data_id)
);

CREATE TABLE dev.game_data (
    game_data_id VARCHAR,
    game_state VARCHAR,
    game_mode VARCHAR,
    is_end BOOLEAN,
    PRIMARY KEY(game_data_id)
);
