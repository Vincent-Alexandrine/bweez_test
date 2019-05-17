import ReduxWrapper from 'Src/utilities/methods/redux.router.wrapper.js';
import Theme from './Theme.component.jsx';

// define Component's props from Store
// const mapStateToProps = (state) => ({
//  current: DefineCurrent(state.status, state.smt),   <-- pass props "current" to Component
// });

const mapStateToProps = (state) => ({
  currentTheme: state.theme.current,
});

// define Component's cb as props, triggering "dispatch"
// const mapDispatchToProps = (dispatch) => ({
//   onSelect: id => dispatch(selectSmt(id)),   <-- pass props "onSelect" to Component
// });

const mapDispatchToProps = () => ({

});

export default ReduxWrapper(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
