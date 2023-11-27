
CREATE TABLE prd.votes (
    game_data_id VARCHAR,
    voter_device_id VARCHAR,
    voter_player_name VARCHAR,
    voter_player_icon VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    PRIMARY KEY(game_data_id, voter_device_id)
);

CREATE TABLE dev.votes (
    game_data_id VARCHAR,
    voter_device_id VARCHAR,
    voter_player_name VARCHAR,
    voter_player_icon VARCHAR,
    receiver_device_id VARCHAR,
    receiver_player_name VARCHAR,
    receiver_player_icon VARCHAR,
    PRIMARY KEY(game_data_id, voter_device_id)
);
