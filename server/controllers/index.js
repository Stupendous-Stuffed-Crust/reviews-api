const models = require('../models');

module.exports = {
  get: function (req, res) {
    const {product_id, sortBy, limit, page} = req.query;
    models.getReviews(product_id, sortBy, limit, page)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send('Error executing query: ' + err.stack));
  },
}