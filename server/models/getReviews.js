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
},