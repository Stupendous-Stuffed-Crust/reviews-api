DROP TABLE IF EXISTS reviewsList.review;

DROP SCHEMA IF EXISTS reviewsList;

CREATE SCHEMA IF NOT EXISTS reviewsList;

-- Table: reviewsList.review

CREATE TABLE IF NOT EXISTS reviewsList.review
(
	  id SERIAL PRIMARY KEY,
    review_id integer,
    rating integer,
    summary character varying(60),
    recommend boolean DEFAULT false,
    response text,
    body text,
    date character varying(30),
    reviewer_name character varying(30),
    helpfulness integer DEFAULT 0,
    photos integer
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS reviewsList.photos
(
	  id SERIAL PRIMARY KEY,
    review_id FOREIGN KEY,
    url text,
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS reviewsList.review
    OWNER to postgres;
