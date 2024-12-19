import {createSlice} from '@reduxjs/toolkit';

interface initialStateProps {
  count: number;
}
const initialState:initialStateProps = {
  count: 1,
}; 
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
