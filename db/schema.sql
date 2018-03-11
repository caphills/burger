-- create the database and burger table with the required field or column headers
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers_db;
CREATE TABLE burgers (
  id INT ( 10 ) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR ( 255 ) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);