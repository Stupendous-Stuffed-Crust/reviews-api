\COPY review FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY photo FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY characteristic_reviews FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX product_id_index ON review (product_id);
CREATE INDEX review_id_index ON photo (review_id);
CREATE INDEX characteristics_review_id_index ON characteristics (review_id);
CREATE INDEX characteristic_id_index ON characteristic_reviews (characteristic_id);
CREATE INDEX characteristic_reviews_review_id_index ON characteristic_reviews (review_id);