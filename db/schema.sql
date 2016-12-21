BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS savedSearch;

CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE savedSearch (
  search_id SERIAL PRIMARY KEY,
  roverUrl TEXT,
  bingUrl TEXT,
  visionText TEXT,
  username VARCHAR REFERENCES users(username)
);

COMMIT;







