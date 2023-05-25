\COPY reviewsList.review FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/db/csvs/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY reviewsList.photo FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/db/csvs/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY reviewsList.characteristics FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/db/csvs/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY reviewsList.characteristic_reviews FROM '/home/purplepenguinparty/hackreactor2303/sdc/reviews-api/db/csvs/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;