DO
$$
BEGIN
    IF NOT EXISTS(SELECT *
                   FROM information_schema.tables
                   WHERE table_schema = 'posts'
                         AND table_name = 'users')
    THEN
        CREATE TABLE users (
            id serial PRIMARY KEY,
            name varchar(10) NOT NULL
        );
  END IF;
END;
$$