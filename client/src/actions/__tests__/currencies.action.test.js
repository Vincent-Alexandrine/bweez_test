import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  FETCH_CURRENCIES,
  fetchCurrencies,
  fetchCurrency,
  requestCurrencies,
  successCurrencies,
  failedCurrencies,
} from '../currencies.actions.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('action requestCurrencies()', () => {
  expect(requestCurrencies()).toEqual({
    type: FETCH_CURRENCIES,
  });
});

test('action successCurrencies()', () => {
  const items = [];
  expect(successCurrencies(items)).toEqual({
    type: FETCH_CURRENCIES,
    status: 'success',
    items,
  });
});

test('action failedCurrencies()', () => {
  const err = 204;
  expect(failedCurrencies(err)).toEqual({
    type: FETCH_CURRENCIES,
    status: 'error',
    err,
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

   it('action fetchCurrencies()', () => {
    fetchMock.getOnce(`${process.env.API_URL}/currencies`, [{ name: 'bitcoin' }]);

    const store = mockStore({ currencies: { items: [] }});
    const actions = [
      { type: FETCH_CURRENCIES },
      { type: FETCH_CURRENCIES, status: 'success', items: [{ name: 'bitcoin' }]}
    ];
    return store.dispatch(fetchCurrencies())
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });

  it('action getCurrency() success', () => {
    fetchMock.getOnce(`${process.env.API_URL}/currencies/bitcoin`, [{ name: 'bitcoin' }]);

    const store = mockStore({ currencies: { items: [] }});
    const actions = [
      { type: FETCH_CURRENCIES },
      { type: FETCH_CURRENCIES, status: 'success', items: [{ name: 'bitcoin' }]}
    ];
    return store.dispatch(fetchCurrency('bitcoin'))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });

  it('action getCurrency() failed', () => {
    fetchMock.getOnce(`${process.env.API_URL}/currencies/unknown`, { status: 204 });

    const store = mockStore({ currencies: { items: [] }});
    const actions = [
      { type: FETCH_CURRENCIES },
      { type: FETCH_CURRENCIES, status: 'error', err: 204 }
    ];
    return store.dispatch(fetchCurrency('unknown'))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });
});
