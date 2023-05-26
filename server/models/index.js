const db = require('../db');

module.exports = {
  getReviews: function (product_id, function(request, response) {
    const query = {
      name: 'fetch-product-reviews',
      text: 'SELECT * from review WHERE product_id=$1',
      values: [product_id];
    }
    pool
      .query(query)
      .then((res) => response.status(200).send(res.rows))
      .catch((err) => response.status(500).send('Error executing query: ' + err.stack));
  }),

  }
