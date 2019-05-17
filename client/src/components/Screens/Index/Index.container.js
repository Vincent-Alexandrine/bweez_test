import ReduxWrapper from 'Src/utilities/methods/redux.router.wrapper.js';
import { fetchCurrencies, fetchCurrency } from 'Actions/currencies.actions.js';
import Index from './Index.component.jsx';

// define Component's props from Store
// const mapStateToProps = (state) => ({
//  current: DefineCurrent(state.status, state.smt),   <-- pass props "current" to Component
// });

const mapStateToProps = (state) => ({
  currencies: state.currencies.items,
  isFetching: state.currencies.isFetching,
  err: state.currencies.err,
});

// define Component's cb as props, triggering "dispatch"
// const mapDispatchToProps = (dispatch) => ({
//   onSelect: id => dispatch(selectSmt(id)),   <-- pass props "onSelect" to Component
// });

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  getCurrency: (currency) => dispatch(fetchCurrency(currency)),
});

export default ReduxWrapper(
  mapStateToProps,
  mapDispatchToProps
)(Index);
