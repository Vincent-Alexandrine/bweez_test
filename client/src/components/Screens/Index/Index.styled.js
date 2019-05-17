import styled from 'styled-components';
import media from 'Styles/methods/media';

export default styled.div`
  display: grid;
  grid-template-rows: 15rem auto;
  grid-row-gap: 1rem;
  grid-template-columns: 12rem auto 12rem;
  grid-template-areas:
    ". header ."
    ". main .";

  ${media.tablet`
    grid-template-rows: 10rem auto;
    grid-template-columns: 9% auto 9%;
  `}
  main {
    grid-area: main;
  }

  [name="header"] {
    grid-area: header;
  }
`;
