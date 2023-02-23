import { createSlice } from "@reduxjs/toolkit";

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState: {
    category: '',
    difficulty: '',
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeDifficulty: (state, action) => {
      state.difficulty = action.payload;
    }
  }
});

export const { changeCategory, changeDifficulty } = queryParamsSlice.actions;

export default queryParamsSlice.reducer;