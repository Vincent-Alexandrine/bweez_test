import palette from './palette.js';

export default {
  name: 'vManuscript',
  ...palette,
};
/* NOTE: later, create getter for those instead of populating theme.
    Then allow control of typo and shape.
  theme = {
    name,
    primary,
    secondary,
    colors,
    shape,
    typography,
  }
*/
