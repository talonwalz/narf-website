INSERT INTO testimonials (admin_id, post)
VALUES ($1, $2);
SELECT * FROM testimonials
ORDER BY post_id DESC;