COPY reviewsList.review
FROM '/tmp/postgres/csvs/reviews.csv'
DELIMITER ',' CSV HEADER;

COPY reviewsList.photo
FROM '/tmp/postgres/csvs/reviews_photos.csv'
DELIMITER ',' CSV HEADER;

COPY reviewsList.characteristics
FROM '/tmp/postgres/csvs/characteristics.csv'
DELIMITER ',' CSV HEADER;

COPY reviewsList.characteristic_reviews
FROM '/tmp/postgres/csvs/characteristic_reviews.csv'
DELIMITER ',' CSV HEADER;