CREATE SCHEMA IF NOT EXISTS reviewsList;

DROP TABLE IF EXISTS reviewsList.characteristics;

CREATE TABLE IF NOT EXISTS reviewsList.characteristics
(
id BIGSERIAL PRIMARY KEY NOT NULL,
review_id BIGINT NOT NULL,
name TEXT NOT NULL
)
TABLESPACE pg_default;
