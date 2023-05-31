const models = require('../models');

module.exports = {
  getReviews(req, res) {
    const {
      product_id, sortBy, limit, page,
    } = req.query;
    models.getReviews(product_id, sortBy, limit, page)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send('Error executing query'));
  },
  getReviewsPhotos(req, res) {
    const { product_id } = req.query;
    models.getReviewsPhotos(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send('Error executing query'));
  },
  getCharacteristics(req, res) {
    const { product_id } = req.query;
    models.getCharacteristics(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send('Error executing query'));
  },
  getCharacteristicReviews(req, res) {
    const { product_id } = req.query;
    models.getCharacteristicReviews(product_id)
      .then((result) => res.send(result.rows))
      .catch((err) => res.status(500).send('Error executing query'));
  },
  addReview(req, res) {
    console.log('REQUEST.BODY!!!!!', req.body);
    let {
      product_id,
      rating,
      summary,
      body,
      recommend,
      reviewer_name,
      reviewer_email,
    } = req.body;

    product_id = Number(product_id);
    rating = Number(rating);
    recommend = JSON.parse(recommend.toLowerCase());

    models.addReview(
      product_id,
      rating,
      summary,
      body,
      recommend,
      reviewer_name,
      reviewer_email,
    )
      .then(() => res.send('Review successfully added'))
      .catch((err) => {
        res.status(500).send('Error executing query');
        console.error(err.stack);
      });
  },
};
