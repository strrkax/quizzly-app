import { createSlice, Middleware, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../../main";

interface rightWrongCount {
  right: number;
  wrong: number;
};

interface StatsState {
  easy: rightWrongCount;
  medium: rightWrongCount;
  hard: rightWrongCount;
}

interface checkAnswerParams {
  difficulty: string;
  correctness: string;
}

const initialStateZero: StatsState = {
  easy: {
    right: 0,
    wrong: 0,
  },
  medium: {
    right: 0,
    wrong: 0,
  },
  hard: {
    right: 0,
    wrong: 0,
  }
};


export const statsStateLoader = (initialStateZero: StatsState): StatsState => {
  try {
    let statsState = localStorage.getItem('statsState');
    if (statsState === null) {
      return initialStateZero;
    }
    return JSON.parse(statsState);

  } catch (error) {
    return initialStateZero;
  }
};

const initialState = statsStateLoader(initialStateZero);

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    incrementStat(state, action: PayloadAction<checkAnswerParams>) {
      state[action.payload.difficulty as keyof StatsState][action.payload.correctness as keyof rightWrongCount] += 1;
    }
  }
});

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  if (incrementStat.match(action)) {
    let state = store.getState();
    try {
      localStorage.setItem('statsState', JSON.stringify(state.statsReducer));
    } catch (error) {
      console.log(error);
    }
  }
  return result;
};

export const { incrementStat } = statsSlice.actions;

export default statsSlice.reducer;