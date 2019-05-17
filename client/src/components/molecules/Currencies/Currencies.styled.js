import styled from 'styled-components';
import { getElevation } from 'Styles/methods/elevation';
import media from 'Styles/methods/media';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1rem;

  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  `}

  ${media.phone`
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  `}

  list-style: none;
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

export const Tile = styled.li`
  padding: .5rem;
  border-radius: 4px;
  box-shadow: ${getElevation(2)};
  transition: all .1s ease-in;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &:hover {
    box-shadow: ${getElevation(4)};
  }

  [name="name"], [name="price"] {
    flex: 0 1 60%;
  }
  [name="symbol"], [name="change"] {
    text-align: right;
    flex: 0 1 33%;
  }
  [name="price"], [name="change"] {
    align-self: center;
  }
  [name="cap"] {
    flex: 1 0 auto;
    align-self: flex-end;
  }
`;
