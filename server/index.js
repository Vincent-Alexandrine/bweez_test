const express = require('express');
const cors = require('cors');
const api = require('./api/index.js');

const app = express();
const port = 3000;

app.use(cors({
  origin: process.env.APP_URL
}));

app.get('/', (req, res) => res.send('UESH'));
app.use(api);
app.use(function (req, res) {
  res.status(404).send('route doesn\'t exist');
});

app.listen(port, () => console.log(`Bweez test server listening on port ${port}!`));    // eslint-disable-line
