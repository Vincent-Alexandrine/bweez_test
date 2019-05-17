import ReduxWrapper from 'Src/utilities/methods/redux.router.wrapper.js';

import <%= pascalEntityName %> from './<%= pascalEntityName %>.component.jsx';

// define Component's props from Store
// const mapStateToProps = (state) => ({
//  current: DefineCurrent(state.status, state.smt),   <-- pass props "current" to Component
// });

const mapStateToProps = (state) => ({

});

// define Component's cb as props, triggering "dispatch"
// const mapDispatchToProps = (dispatch) => ({
//   onSelect: id => dispatch(selectSmt(id)),   <-- pass props "onSelect" to Component
// });

const mapDispatchToProps = (dispatch) => ({

});

export default ReduxWrapper(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
