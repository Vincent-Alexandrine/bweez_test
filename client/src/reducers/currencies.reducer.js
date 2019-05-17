import { FETCH_CURRENCIES } from 'Actions/currencies.actions.js';

const state = {
  isFetching: false,
  items: [],
  err: null,
};

export const fetchCurrencies = (state) => ({
  ...state,
  isFetching: true,
});

export const successCurrencies = (state, { items }) => ({
  ...state,
  err: null,
  isFetching: false,
  items,
});

export const failedCurrencies = (state, { err }) => ({
  ...state,
  isFetching: false,
  err,
});

export default (currenciesState = state, action) => {
  const { type, status, ...params} = action;

  switch (type) {
    case FETCH_CURRENCIES:
      if (!status)
        return fetchCurrencies(currenciesState);
      else if (status === 'success')
        return successCurrencies(currenciesState, params);
      else if (status === 'error')
        return failedCurrencies(currenciesState, params);
      break;
    default:
      return state;
  }
}
