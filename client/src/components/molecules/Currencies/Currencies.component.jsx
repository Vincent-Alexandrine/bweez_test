import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Tile } from './Currencies.styled.js';

function Currencies({ items }) {
  return (
    <Grid>
      {items.map(({ name, market_cap, price, change, symbol }) => (
        <Tile key={symbol}>
          <h6 name="name">{name}</h6>
          <code name="symbol">{symbol}</code>
          <span name="price">{price}</span>
          <span name="change">{change}</span>
          <span name="cap">{market_cap}</span>
        </Tile>
      ))}
    </Grid>
  );
}

Currencies.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    market_cap: PropTypes.number,
    change: PropTypes.number,
    price: PropTypes.number,
    symbol: PropTypes.string
  })),
};

export default Currencies;
