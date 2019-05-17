import { css } from 'styled-components';
import { fluidRange } from 'polished';
import iAWriterQuattro from 'Assets/fonts/iAWriterQuattroV.ttf';

/*
  fluidRange:
  min: 5*val/(4*phi)
  max: 3*val*phi/4
*/

export default css`
  @font-face {
    font-family: 'iAWriter';
    src: url(${iAWriterQuattro}) format('truetype');
  }

  * {
    font-family: 'iAWriter';
    font-variation-settings: "wght" 450, "SPCG" 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-variation-settings: "wght" 600, "SPCG" 30;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '2.704rem',
        toSize: '4.247rem',
      },
      '32rem',
      '144rem'
    )}
  }

  h2 {
    font-variation-settings: "wght" 580,"SPCG" 26;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '2.395rem',
        toSize: '3.762rem',
      },
      '32rem',
      '144rem'
    )}
  }

  h3 {
    font-variation-settings: "wght" 540,"SPCG" 20;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '2.086rem',
        toSize: '3.277rem',
      },
      '32rem',
      '144rem'
    )}
  }

  h4 {
    font-variation-settings: "wght" 480,"SPCG" 10;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.777rem',
        toSize: '2.791rem',
      },
      '32rem',
      '144rem'
    )}
  }

  h5 {
    font-variation-settings: "wght" 470,"SPCG" 8;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.545rem',
        toSize: '2.427rem',
      },
      '32rem',
      '144rem'
    )}
  }

  h6 {
    font-variation-settings: "wght" 460,"SPCG" 6;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.390rem',
        toSize: '2.184rem',
      },
      '32rem',
      '144rem'
    )}
  }

  span, p, div {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.236rem',
        toSize: '1.942rem',
      },
      '32rem',
      '144rem'
    )}
  }


  i, button {
    font-variation-settings: "wght" 550,"SPCG" 0;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.236rem',
        toSize: '1.942rem',
      },
      '32rem',
      '144rem'
    )}
    font-style: normal;
  }

  a {
    text-decoration: none;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '1.159rem',
        toSize: '1.820rem',
      },
      '32rem',
      '144rem'
    )}
    &, & * {
      font-variation-settings: "wght" 550,"SPCG" 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
