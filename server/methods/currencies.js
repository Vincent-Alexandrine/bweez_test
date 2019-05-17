module.exports = function formatCurrency({ name, symbol, quote }) {
  return {
    name,
    symbol,
    price: Math.round(quote.USD.price * 100) / 100,
    market_cap: Math.round(quote.USD.market_cap * 100) / 100,
    change: Math.round(quote.USD.percent_change_24h * 100) / 100
  };
}
