import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import lodash from "lodash";
import { RootState } from "./store";

interface FavoriteSliceState {
  favoritedIds : number[]
}

const initialState : FavoriteSliceState = {
  favoritedIds: [],
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action : PayloadAction<number>) => {
      state.favoritedIds.push(action.payload);
    },
    remove: (state, action : PayloadAction<number>) => {
      lodash.pull(state.favoritedIds, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = slice.actions;

export default slice.reducer;