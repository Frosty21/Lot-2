CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(20) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  username VARCHAR(36) NOT NULL,
  password VARCHAR(32) NOT NULL,
  register_date DATE NOT NULL
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(500) NOT NULL,
  timer_length INTEGER NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question VARCHAR(512) NOT NULL,
  correct_answer VARCHAR(256) NOT NULL,
  wrong_answer_1 VARCHAR(256) NOT NULL,
  wrong_answer_2 VARCHAR(256) NOT NULL,
  wrong_answer_3 VARCHAR(256) NOT NULL
);

CREATE TABLE games_questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER NOT NULL,
  game_id INTEGER NOT NULL
);

CREATE TABLE games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  started_time INTEGER NOT NULL,
  ended_time INTEGER NOT NULL,
  game_id INTEGER NOT NULL,
  played_scores_id INTEGER NOT NULL,
  played_users_id INTEGER NOT NULL
);

CREATE TABLE played_users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  games_played_id INTEGER NOT NULL
);

CREATE TABLE played_scores (
  id SERIAL PRIMARY KEY NOT NULL,
  score INTEGER NOT NULL,
  user_id INTEGER NOT NULL
);