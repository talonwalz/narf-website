DELETE FROM testimonials
WHERE post_id = $1;
SELECT * FROM testimonials
ORDER BY post_id DESC;