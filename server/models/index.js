const { pool } = require('../db');

module.exports = {
  getReviews(product_id, sortBy = 'id', limit = 5, page = 1) {
    const query = {
      name: 'fetch-product-reviews',
      text: `SELECT * from review
        WHERE product_id=$1
        ORDER BY ${sortBy} ${sortBy === 'id' ? 'ASC' : 'DESC'}
        LIMIT $2
        OFFSET $3`,
      values: [product_id, limit, limit * (page - 1)],
    };
    return pool.query(query);
  },
  getReviewsPhotos(product_id) {
    const query = {
      name: 'fetch-reviews-photos',
      text: 'SELECT photo.* FROM photo INNER JOIN review ON photo.review_id=review.id WHERE review.product_id=$1;',
      values: [product_id],
    };
    return pool.query(query);
  },
  getCharacteristics(product_id) {
    const query = {
      name: 'fetch-characteristics',
      text: 'SELECT characteristics.* FROM characteristics INNER JOIN review ON characteristics.review_id=review.id WHERE review.product_id=$1;',
      values: [product_id],
    };
    return pool.query(query);
  },
  getCharacteristicReviews(product_id) {
    const query = {
      name: 'fetch-characteristic-reviews',
      text: 'SELECT characteristic_reviews.* FROM characteristic_reviews INNER JOIN review ON characteristic_reviews.review_id=review.id WHERE review.product_id=$1;',
      values: [product_id],
    };
    return pool.query(query);
  },
  addReview(
    product_id,
    rating,
    summary,
    body,
    recommend,
    reviewer_name,
    reviewer_email
  ) {
    const query = {
      name: 'post-review',
      text: 'INSERT INTO review (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);',
      values: [
        product_id,
        rating,
        Date.now(),
        summary,
        body,
        recommend,
        false,
        reviewer_name,
        reviewer_email,
        null,
        0,
      ],
    };
    return pool.query(query);
  },
};
