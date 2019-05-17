import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from 'Styles/vManuscript';

import Header from '../Header.component.jsx';
import Styled from '../Header.styled.js';

test('Header component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Header styled component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Styled />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
