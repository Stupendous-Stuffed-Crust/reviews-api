const controller = require('./controllers');
const router = require('express').Router();

router.get('/reviews', controller.getReviews);
router.get('/reviews/photos', controller.getReviewsPhotos);
router.get('/reviews/characteristics', controller.getCharacteristics);
router.get('/reviews/characteristicreviews', controller.getCharacteristicReviews);

module.exports = router;