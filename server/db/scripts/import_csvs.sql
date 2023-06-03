\COPY review FROM '/var/lib/postgresql/csv_files/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY photo FROM '/var/lib/postgresql/csv_files/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics FROM '/var/lib/postgresql/csv_files/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY characteristic_reviews FROM '/var/lib/postgresql/csv_files/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX review_index ON review (product_id, rating, recommend);
CREATE INDEX characteristics_index ON characteristics (review_id, name);
CREATE INDEX characteristic_reviews_index ON characteristic_reviews (characteristic_id, review_id, value);
CREATE INDEX photo_index ON photo (review_id);