CREATE SCHEMA IF NOT EXISTS reviewsList;

DROP TABLE IF EXISTS reviewsList.photo;

CREATE TABLE IF NOT EXISTS reviewsList.photo
(
	id SERIAL PRIMARY KEY NOT NULL,
    review_id INT NOT NULL,
    url TEXT NOT NULL
);

COPY reviewsList.photo
FROM '/tmp/postgres/csvs/reviews_photos.csv'
DELIMITER ',' CSV HEADER;
