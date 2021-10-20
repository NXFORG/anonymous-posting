DO
$$
BEGIN
    IF NOT EXISTS(SELECT *
                   FROM information_schema.tables
                   WHERE table_schema = 'posts'
                         AND table_name = 'posts')
    THEN
        CREATE TABLE posts (
            id serial PRIMARY KEY,
            title varchar(50) NOT NULL,
            name varchar(10) NOT NULL,
            body varchar NOT NULL,
            user_id int
        );
  END IF;
END;
$$