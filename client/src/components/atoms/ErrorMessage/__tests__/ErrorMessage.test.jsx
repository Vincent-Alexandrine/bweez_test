import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from 'Styles/vManuscript';

import ErrorMessage from '../ErrorMessage.component.jsx';
import Styled from '../ErrorMessage.styled.js';

test('ErrorMessage component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ErrorMessage />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('ErrorMessage styled component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Styled />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
