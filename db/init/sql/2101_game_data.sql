
CREATE TABLE prd.game_data (
    game_data_id VARCHAR,
    game_state VARCHAR,
    game_mode VARCHAR,
    is_end BOOLEAN,
    current_turn INTEGER,
    turn_vote_count INTEGER,
    winning_team VARCHAR,
    PRIMARY KEY(game_data_id)
);

CREATE TABLE dev.game_data (
    game_data_id VARCHAR,
    game_state VARCHAR,
    game_mode VARCHAR,
    is_end BOOLEAN,
    current_turn INTEGER,
    turn_vote_count INTEGER,
    winning_team VARCHAR,
    PRIMARY KEY(game_data_id)
);
