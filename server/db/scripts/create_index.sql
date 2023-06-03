CREATE INDEX review_index ON review (product_id, rating, recommend);
CREATE INDEX characteristics_index ON characteristics (review_id, name);
CREATE INDEX characteristic_reviews_index ON characteristic_reviews (characteristic_id, review_id, value);
CREATE INDEX photo_index ON photo (review_id);