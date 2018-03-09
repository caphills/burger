-- create the database and burger table with the required field or column headers
CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers_db;
CREATE TABLE burger 
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);