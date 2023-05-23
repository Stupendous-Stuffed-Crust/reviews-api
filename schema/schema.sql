DROP TABLE IF EXISTS reviewsList.review;

DROP SCHEMA IF EXISTS reviewsList;

CREATE SCHEMA IF NOT EXISTS reviewsList;

-- Table: reviewsList.review

CREATE TABLE IF NOT EXISTS reviewsList.review
(
	  id SERIAL PRIMARY KEY,
    review_id integer,
    rating integer,
    summary character varying(60) COLLATE pg_catalog."default",
    recommend boolean DEFAULT false,
    response text COLLATE pg_catalog."default",
    body text COLLATE pg_catalog."default",
    date character varying(30) COLLATE pg_catalog."default",
    reviewer_name character varying(30) COLLATE pg_catalog."default",
    helpfulness integer DEFAULT 0,
    photos integer[]
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS reviewsList.review
    OWNER to postgres;
