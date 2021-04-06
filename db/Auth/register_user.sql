INSERT INTO employees (username, password)
VALUES ($1, $2)
returning *;