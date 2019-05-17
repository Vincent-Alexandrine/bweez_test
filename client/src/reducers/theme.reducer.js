import { CHANGE_THEME } from 'Actions/theme.actions.js';
import vManuscript from 'Styles/vManuscript';

// TODO: should be linked to SC
const state = {
  current: vManuscript.name,
};

export const changeTheme = (state, { newTheme }) => ({
  ...state,
  current: newTheme,
});
export default (themeState = state, action) => {
  const { type, ...params } = action;
  switch (type) {
    case CHANGE_THEME:
      return changeTheme(themeState, params);
    default:
      return state;
  }
}
