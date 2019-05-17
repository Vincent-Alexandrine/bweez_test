import { changeTheme } from 'Reducers/theme.reducer.js';

 test('reducer changeTheme()', () => {
   const mockState = {
     currrent: 'old',
     otherData: 'otherData',
   };

   const newTheme = 'newTheme';

   expect(changeTheme(mockState, { newTheme })).toEqual({
     ...mockState,
     current: newTheme,
   });
 });
