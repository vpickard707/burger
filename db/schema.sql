-- -- Write SQL queries this file that do the following:
-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

 -- DEPARTMENT TABLE ----
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
  burger_name VARCHAR(30),
--   salary DECIMAL,
  devoured Boolean
);
