DELETE FROM feedback 
WHERE feedback_id = $1;
SELECT * FROM feedback
ORDER BY feedback_id DESC;