\COPY review FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY photo FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY characteristic_reviews FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/server/db/csvs/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;