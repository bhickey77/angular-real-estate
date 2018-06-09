CREATE TABLE listings (
    id serial primary key,
    price integer,
    sqft integer,
    type varchar(4),
    city varchar(20),
    image_path varchar(30)
)
