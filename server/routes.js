const controller = require('./controllers');
const router = require('express').Router();

router.get('/reviews', controller.get);

module.exports = router;