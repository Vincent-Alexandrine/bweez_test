import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from 'Styles/vManuscript';

import <%= pascalEntityName %> from '../<%= pascalEntityName %>.component.jsx';
import Styled from '../<%= pascalEntityName %>.styled.js';

test('<%= pascalEntityName %> component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <<%= pascalEntityName %> />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('<%= pascalEntityName %> styled component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Styled />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
