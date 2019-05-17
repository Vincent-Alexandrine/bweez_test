import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Theme from '../Theme.component.jsx';
import Styled from '../Theme.styled.js';

test('Theme component should match snapshot', () => {
  const component = renderer
    .create(<Theme />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Theme styled component should match snapshot', () => {
  const component = renderer
    .create(<Styled />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
