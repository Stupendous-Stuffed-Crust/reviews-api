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

DROP TABLE IF EXISTS reviewsList.photo;

CREATE TABLE IF NOT EXISTS reviewsList.photo
(
	id SERIAL PRIMARY KEY NOT NULL,
    review_id INT NOT NULL,
    url TEXT NOT NULL
);

ALTER TABLE reviewsList.photo ADD CONSTRAINT review_id_fkey FOREIGN KEY (review_id) REFERENCES reviewsList.review(id);

DROP TABLE IF EXISTS reviewsList.characteristics;

CREATE TABLE IF NOT EXISTS reviewsList.characteristics
(
id BIGSERIAL PRIMARY KEY NOT NULL,
review_id BIGINT NOT NULL,
name TEXT NOT NULL
)
TABLESPACE pg_default;

ALTER TABLE reviewsList.characteristics ADD CONSTRAINT review_id_fkey FOREIGN KEY (review_id) REFERENCES reviewsList.review(id);

DROP TABLE IF EXISTS reviewsList.characteristic_reviews;

CREATE TABLE IF NOT EXISTS reviewsList.characteristic_reviews
(
id BIGSERIAL PRIMARY KEY NOT NULL,
characteristic_id BIGINT NOT NULL,
review_id BIGINT NOT NULL,
VALUE INT NOT NULL
)
TABLESPACE pg_default;

ALTER TABLE reviewsList.characteristic_reviews ADD CONSTRAINT review_id_fkey FOREIGN KEY (review_id) REFERENCES reviewsList.review(id);
ALTER TABLE reviewsList.characteristic_reviews ADD CONSTRAINT characteristic_id_fkey FOREIGN KEY (characteristic_id);REFERENCES reviewsList.characteristics(id);