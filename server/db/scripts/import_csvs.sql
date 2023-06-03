\COPY review FROM '/var/lib/postgresql/csv_files/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY photo FROM '/var/lib/postgresql/csv_files/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics FROM '/var/lib/postgresql/csv_files/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY characteristic_reviews FROM '/var/lib/postgresql/csv_files/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX product_id_index ON review (product_id);
CREATE INDEX review_id_index ON photo (review_id);
CREATE INDEX characteristics_review_id_index ON characteristics (review_id);
CREATE INDEX characteristic_id_index ON characteristic_reviews (characteristic_id);
CREATE INDEX characteristic_reviews_review_id_index ON characteristic_reviews (review_id);

/*

Slowed down response time on characteristic_reviews
CREATE INDEX review_index ON review (product_id, rating, recommend);
CREATE INDEX characteristics_index ON characteristics (review_id, name);
CREATE INDEX characteristic_reviews_index ON characteristic_reviews (characteristic_id, review_id, value);
CREATE INDEX photo_index ON photo (review_id);

*/