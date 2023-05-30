const models = require('../models');

module.exports = {
  getReviews(req, res) {
    const {
      product_id, sortBy, limit, page,
    } = req.query;
    models.getReviews(product_id, sortBy, limit, page)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send(`Error executing query: ${err.stack}`));
  },
  getReviewsPhotos(req, res) {
    const { product_id } = req.query;
    models.getReviewsPhotos(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send(`Error executing query: ${err.stack}`));
  },
  getCharacteristics(req, res) {
    const { product_id } = req.query;
    models.getCharacteristics(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send(`Error executing query: ${err.stack}`));
  },
  getCharacteristicReviews(req, res) {
    const { product_id } = req.query;
    models.getCharacteristicReviews(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send(`Error executing query: ${err.stack}`));
  },
};
