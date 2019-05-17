import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ReduxWrapper = (mapStateToProps, mapDispatchToProps) => {
  const res = (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
  return res;
}

export default ReduxWrapper;
