import { configureStore } from "@reduxjs/toolkit";
import favoriteSliceReducer from "./favoriteSlice";

const rawPersistedState = localStorage.getItem("favorites");
/*eslint-disable */
const persistedState = rawPersistedState
                       ? JSON.parse(rawPersistedState)
                       : {};
/*eslint-enable */

export const store = configureStore({
  reducer: {
    favorite: favoriteSliceReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(()=>{
  localStorage.setItem("favorites", JSON.stringify(store.getState()));
});

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;