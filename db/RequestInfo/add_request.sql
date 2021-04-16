INSERT INTO questions (first_name, last_name, phone_number, question, date)
VALUES ( $1, $2, $3, $4, $5);
SELECT * FROM questions
ORDER BY question_id DESC;