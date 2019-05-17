import { combineReducers } from 'redux';
import theme from './theme.reducer.js';
import currencies from './currencies.reducer.js';
// NOTE: import your theme here then add them inside the combine reducer
export default combineReducers({
  theme,
  currencies,
});
