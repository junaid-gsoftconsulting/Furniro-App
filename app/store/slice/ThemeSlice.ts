import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface initialStateProps {
  isDark: boolean;
}
const initialState: initialStateProps = {
  isDark: false,
};
export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      console.log('isDark', action);
      return {
        ...state,
        isDark: action.payload,
      };
    },
  },
});
export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
