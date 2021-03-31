DROP DATABASE IF EXISTS wedding;

CREATE DATABASE wedding;

\c wedding

CREATE TABLE registration (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  snail BOOLEAN DEFAULT FALSE,
  vegetarian BOOLEAN DEFAULT FALSE,
  streetOne VARCHAR(500),
  streetTwo VARCHAR(200),
  cityState VARCHAR(100),
  zip INT
);
