const router = require('express').Router();
const currencies = require('./currencies.js');

router.use('/currencies', currencies);

module.exports = router;
