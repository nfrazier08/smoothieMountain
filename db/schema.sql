### Schema

CREATE DATABASE smoothies_db;
USE smoothies_db;

CREATE TABLE smoothies (
    smoothie_id int AUTO_INCREMENT, 
    smoothie_name varchar(30) NOT NULL, 
    smoothie_slurped BOOLEAN NOT NULL DEFAULT FALSE, 
    smoothie_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (smoothie_id)
);

