/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { studentApi } from "../features/redux/services/studentsApi";
import studentsReducer from "./../features/redux/slices/studentsSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
