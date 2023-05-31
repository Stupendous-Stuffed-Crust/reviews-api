const router = require('express').Router();
const controller = require('./controllers');

router.get('/reviews', controller.getReviews);
router.post('/reviews', controller.addReview);
router.get('/reviews/photos', controller.getReviewsPhotos);
router.get('/reviews/characteristics', controller.getCharacteristics);
router.get('/reviews/characteristicreviews', controller.getCharacteristicReviews);

module.exports = router;
