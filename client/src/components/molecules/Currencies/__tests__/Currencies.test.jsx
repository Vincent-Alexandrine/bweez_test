import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from 'Styles/vManuscript';

import Currencies from '../Currencies.component.jsx';
import { Grid, Tile } from '../Currencies.styled.js';

test('Currencies component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Currencies items={[]} />
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Currencies styled component should match snapshot', () => {
  const component = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Grid>
          <Tile />
        </Grid>
      </ThemeProvider>
    );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
