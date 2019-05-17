const CHANGE_THEME = Symbol();

const changeTheme = (newTheme) => {
  return ({
  type: CHANGE_THEME,
  newTheme,
})};

export { CHANGE_THEME, changeTheme };
