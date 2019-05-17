import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'Src/store';
import Theme from 'Organisms/Theme';
import Index from 'Screens/Index';

import './i18n/i18n.config.js';
import 'modern-normalize';

export default () => (
  <Provider store={store}>
    <Router>
      <Theme>
        <Route path="/" component={Index} />
      </Theme>
    </Router>
  </Provider>
);
