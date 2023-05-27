const models = require('../models');

module.exports = {
  get: function (req, res) {
    const {product_id} = req.query;
    models.getReviews(product_id)
      .then((result) => res.status(200).send(result.rows))
      .catch((err) => res.status(500).send('Error executing query: ' + err.stack));
  },
}