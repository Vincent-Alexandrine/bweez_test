import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ThemeService from 'Src/theme';
import vManuscript from 'Styles/vManuscript';

import GlobalStyle from './Theme.styled.js';

class Theme extends Component {
  static defaultProps = {
    currentTheme: vManuscript.name,
  };

  static propTypes = {
    currentTheme: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    ThemeService.add(vManuscript);
  }

  render() {
    const { children, currentTheme } = this.props;
    const theme = ThemeService.get(currentTheme);
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {children}
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Theme;
