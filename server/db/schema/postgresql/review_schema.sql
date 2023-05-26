DROP TABLE IF EXISTS review CASCADE;

CREATE TABLE IF NOT EXISTS review
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

DROP TABLE IF EXISTS photo CASCADE;

CREATE TABLE IF NOT EXISTS photo
(
	id SERIAL PRIMARY KEY NOT NULL,
    review_id INT NOT NULL,
    url TEXT NOT NULL
);

DROP TABLE IF EXISTS characteristics CASCADE;

CREATE TABLE IF NOT EXISTS characteristics
(
id BIGSERIAL PRIMARY KEY NOT NULL,
review_id BIGINT NOT NULL,
name TEXT NOT NULL
)
TABLESPACE pg_default;

DROP TABLE IF EXISTS characteristic_reviews CASCADE;

CREATE TABLE IF NOT EXISTS characteristic_reviews
(
id BIGSERIAL PRIMARY KEY NOT NULL,
characteristic_id BIGINT NOT NULL,
review_id BIGINT NOT NULL,
VALUE INT NOT NULL
)
TABLESPACE pg_default;
