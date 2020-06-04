CREATE TABLE users(
    user_id serial PRIMARY KEY,
    email varchar (100),
    PASSWORD text
);

CREATE TABLE posts (
    post_id serial PRIMARY KEY,
    user_id int REFERENCES users(user_id),
    content varchar (250),
    create_at date
);