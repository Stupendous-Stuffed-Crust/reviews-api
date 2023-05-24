CREATE SCHEMA IF NOT EXISTS reviewsList;

DROP TABLE IF EXISTS reviewsList.review;

CREATE TABLE IF NOT EXISTS reviewsList.review
(
	id BIGSERIAL PRIMARY KEY NOT NULL,
    product_id BIGINT NOT NULL,
    rating INT NOT NULL,
    date BIGINT NOT NULL,
    summary TEXT NOT NULL,
    body TEXT NOT NULL,
    recommend BOOLEAN DEFAULT false NOT NULL,
    reported BOOLEAN DEFAULT false NOT NULL,
    reviewer_name TEXT NOT NULL,
    reviewer_email TEXT NOT NULL,
    response TEXT,
    helpfulness INT DEFAULT 0 NOT NULL
)
TABLESPACE pg_default;

COPY reviewsList.review
FROM '/tmp/postgres/csvs/reviews.csv'
DELIMITER ',' CSV HEADER;