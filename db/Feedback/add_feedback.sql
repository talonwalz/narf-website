INSERT INTO feedback (first_name, last_name, feedback)
VALUES ($1, $2, $3);
SELECT * FROM feedback
ORDER BY feedback_id DESC;