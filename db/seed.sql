DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS feedback;
DROP TABLE IF EXISTS testimonials;
DROP TABLE IF EXISTS questions;

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE feedback (
    feedback_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL
);

CREATE TABLE testimonials (
    post_id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES employees(employee_id),
    post TEXT NOT NULL
);

CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    question TEXT NOT NULL
);

ALTER TABLE questions
ADD COLUMN date TEXT NOT NULL;

ALTER TABLE questions
ALTER COLUMN phone_number TYPE VARCHAR(12);