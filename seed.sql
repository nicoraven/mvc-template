DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT INTO users (username, password) VALUES ('user1', 'P@ssw0rd1');
INSERT INTO users (username, password) VALUES ('user2', 'P@ssw0rd2');