const {pool} = require('../db');

module.exports = {
  getReviews: function(product_id, sortBy='id', limit=5, page=1) {
    const query = {
      name: 'fetch-product-reviews',
      text:
        `SELECT * from review
        WHERE product_id=$1
        ORDER BY ${sortBy} ${sortBy === 'id' ? 'ASC' : 'DESC'}
        LIMIT $2
        OFFSET $3`,
      values: [product_id, limit, limit * (page - 1)]
    }
    return pool.query(query)
    },
    getReviewsPhotos: function(product_id) {
      const query = {
        name: 'fetch-reviews-photos',
        text: 'SELECT photo.* FROM photo INNER JOIN review ON photo.review_id=review.id WHERE review.product_id=$1;',
        values: [product_id]
      }
      return pool.query(query)
    },
    getCharacteristics: function(product_id) {
      const query = {
        name: 'fetch-characteristics',
        text: 'SELECT characteristics.* FROM characteristics INNER JOIN review ON characteristics.review_id=review.id WHERE review.product_id=$1;',
        values: [product_id]
      }
      return pool.query(query)
    },
    getCharacteristicReviews: function(product_id) {
      const query = {
        name: 'fetch-characteristic-reviews',
        text: 'SELECT characteristic_reviews.* FROM characteristic_reviews INNER JOIN review ON characteristic_reviews.review_id=review.id WHERE review.product_id=$1;',
        values: [product_id]
      }
      return pool.query(query)
    },
  }
