const router = require('express').Router();
const request = require('request-promise');
const formatCurrency = require('../methods/currencies.js');

router.get('/', function(req, res) {
  request({
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '100',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
    },
    json: true
  })
  .then((response) => {
    const data = response.data.map(formatCurrency);
    return res.json(data);
  })
  .catch((err) => {
    if (err.statusCode === 500)
      res.status(500).send('api doesn\'t answer.');
  })
});

router.get('/:currency', function(req, res) {
  const { currency } = req.params;
  request({
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
      slug: currency
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
    },
    json: true
  })
  .then((response) => {
    const data = [formatCurrency(Object.values(response.data)[0])];
    return res.json(data);
  })
  .catch((err) => {
    // invalid value
    if (err.statusCode === 400)
      res.status(204).send('invalid value.');
    else if (err.statusCode === 500)
      res.status(500).send('api doesn\'t answer.');
  });
});


module.exports = router;
