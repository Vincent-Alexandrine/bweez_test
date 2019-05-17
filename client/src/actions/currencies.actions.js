const FETCH_CURRENCIES = Symbol();

const requestCurrencies = () => ({
  type: FETCH_CURRENCIES,
});

const successCurrencies = (items) => ({
  type: FETCH_CURRENCIES,
  status: 'success',
  items,
});

const failedCurrencies = (err) => ({
  type: FETCH_CURRENCIES,
  status: 'error',
  err,
});

const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch(`${process.env.API_URL}/currencies`)
    .then(
      res => {
        if (res.status === 204 || res.status === 500)
          return Promise.reject(res);
        else
          return res.json();
      }
    )
    .then(json => dispatch(successCurrencies(json)))
    .catch(err => dispatch(failedCurrencies(err.status)));
};

const fetchCurrency = (currency) => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch(`${process.env.API_URL}/currencies/${currency}`)
  .then()
    .then(
      res => {
        if (res.status === 204 || res.status === 500)
          return Promise.reject(res);
        else
          return res.json();
      }
    )
    .then(json => dispatch(successCurrencies(json)))
    .catch(err => dispatch(failedCurrencies(err.status)));
};
export {
  FETCH_CURRENCIES,
  fetchCurrencies,
  fetchCurrency,
  requestCurrencies,
  successCurrencies,
  failedCurrencies,
 };
