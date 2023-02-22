import { createSlice } from "@reduxjs/toolkit";

export interface QuestionState {
  value: number;
}

const initialState: QuestionState = {
  value: 0,
};

export const questionSlice = createSlice({
  name: 'question',
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

export const { plus, minus } = questionSlice.actions;

export default questionSlice.reducer;