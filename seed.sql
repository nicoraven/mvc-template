DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT INTO users (username, password) VALUES ('user1', 'f7745f4df4394027716de160fb2acd6aac36699576a8be586b75ac09acf6a0df');
INSERT INTO users (username, password) VALUES ('user2', '7a321f481f952fd8fb964ed1d2a5f86b4eaeecf5b6c04b73876dead6b780fd7e');