CREATE SCHEMA IF NOT EXISTS reviewsList;

DROP TABLE IF EXISTS reviewsList.characteristic_reviews;

CREATE TABLE IF NOT EXISTS reviewsList.characteristic_reviews
(
id BIGSERIAL PRIMARY KEY NOT NULL,
characteristic_id BIGINT NOT NULL,
review_id BIGINT NOT NULL,
VALUE INT NOT NULL
)
TABLESPACE pg_default;
