
CREATE DATABASE skimqhpshyalrotz;
USE skimqhpshyalrotz;

CREATE TABLE burgers 
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
);