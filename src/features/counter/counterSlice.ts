import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: (state) => {
      state.value += 10;
    },

    minus: (state) => {
      state.value -= 10;
    }
  }
});

export const { plus, minus } = counterSlice.actions;

export default counterSlice.reducer;