import { configureStore } from "@reduxjs/toolkit";
import favoriteSliceReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteSliceReducer,
  },
});

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;