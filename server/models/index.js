const {pool} = require('../db');

module.exports = {
  getReviews: function(product_id) {
    const query = {
      name: 'fetch-product-reviews',
      text: 'SELECT * from review WHERE product_id=$1',
      values: [product_id]
    }
      return pool.query(query)
    },
  }
