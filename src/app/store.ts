import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { questionAPI } from "../services/QuestionService";

export const rootReducer = combineReducers({
  counter: counterReducer,
  [questionAPI.reducerPath]: questionAPI.reducer,

});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(questionAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


