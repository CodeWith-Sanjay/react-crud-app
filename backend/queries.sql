CREATE TABLE crud_user (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	age INTEGER,
	email VARCHAR(50),
	gender VARCHAR(10),
	city VARCHAR(30),
	country VARCHAR(30),
	contact VARCHAR(10),
	qualification VARCHAR(50),
	specification VARCHAR(50),
	job VARCHAR(50)
);

SELECT * FROM crud_users

ALTER TABLE crud_user RENAME TO crud_users