
CREATE TABLE game_state (
    game_data_id VARCHAR,
    game_state VARCHAR,
    PRIMARY KEY(game_data_id)
);

INSERT INTO game_state (
    game_data_id, game_state
)
VALUES
    ('gd00001', 'PreGame'),
    ('gd00002', 'PlayerJoiningEnded'),
    ('gd00003', 'DayPhase'),
    ('gd00004', 'PreGame'),
    ('gd00005', 'PlayerJoining')
;

CREATE TABLE player_info (
    game_data_id VARCHAR,
    player_id VARCHAR,
    player_name VARCHAR,
    player_icon VARCHAR,
    player_role VARCHAR,
    player_state VARCHAR,
    PRIMARY KEY(game_data_id, player_id)
);


INSERT INTO player_info (
    game_data_id,
    player_id,
    player_name,
    player_icon,
    player_role,
    player_state
)
VALUES
    ('gd00001', '0001-0001-0001', 'tanaka', '01', 'RL001', 'alive'),
    ('gd00001', '0001-0001-0002', 'sato', '01', 'RL002', 'alive'),
    ('gd00001', '0001-0001-0003', 'suzuki', '01', 'RL004', 'alive'),
    ('gd00002', '0001-0001-0004', 'tanaka', '01', 'RL001', 'alive')
;

