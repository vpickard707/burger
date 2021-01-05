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
    burger_name varchar(255) NOT NULL,
    devoured BOOL NOT NULL,
);
