CREATE DATABASE IF NOT EXISTS videogamesdb;


CREATE TABLE IF NOT EXISTS videogamesdb.videogames(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE,
    genre VARCHAR(255),
    rating DECIMAL(2,1),
    launchy_date DATE,
    publisher VARCHAR(255),
    platforms VARCHAR(255),
    description TEXT
);
