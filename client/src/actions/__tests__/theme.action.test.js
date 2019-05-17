import { changeTheme, CHANGE_THEME } from '../theme.actions.js';

test('action changeTheme()', () => {
  const newTheme = 'theme';

  expect(changeTheme(newTheme)).toEqual({
    type: CHANGE_THEME,
    newTheme,
  });
});
