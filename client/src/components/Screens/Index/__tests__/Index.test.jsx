import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import theme from 'Styles/vManuscript';

import Index from '../Index.component.jsx';
import Styled from '../Index.styled.js';

const currencies = [];
const getCurrencies = () => {};
const getCurrency = () => {};

const props = {currencies, getCurrencies, getCurrency };

test('Index component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Index theme={theme} {...props} />
        </MemoryRouter>
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Index styled component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Styled />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
