DELETE FROM questions 
WHERE question_id = $1;
SELECT * FROM questions
ORDER BY question_id DESC;