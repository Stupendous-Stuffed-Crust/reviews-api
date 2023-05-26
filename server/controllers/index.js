const models = require('../models');

module.exports = {
  get: function (req, res) {
    const {product_id} = req.params;
    models.getReviews(product_id);
  },

}