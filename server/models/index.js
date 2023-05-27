const {pool} = require('../db');

module.exports = {
  getReviews: function(product_id, sortBy='id', limit=5, page=1) {
    const query = {
      name: 'fetch-product-reviews',
      text: `SELECT * from review WHERE product_id=$1 ORDER BY ${sortBy} ${sortBy === 'id' ? 'ASC' : 'DESC'} LIMIT $2 OFFSET $3`,
      values: [product_id, limit, limit * (page - 1)]
    }
      return pool.query(query)
    },
  }
