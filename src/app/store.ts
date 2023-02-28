import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { questionAPI } from "../services/QuestionService";
import queryParamsReducer from '../features/QueryParamsSlice/QueryParamsSlice';
import statsReducer, { localStorageMiddleware } from '../features/StatsSlice/StatsSlice';


export const rootReducer = combineReducers({
  statsReducer,
  queryParamsReducer,
  [questionAPI.reducerPath]: questionAPI.reducer,

});


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(questionAPI.middleware)
        .concat(localStorageMiddleware)
  });
};


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


