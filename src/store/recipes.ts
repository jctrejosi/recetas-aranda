/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './index'

export const recipesSlice = createSlice({
  name: "recipes",

  initialState: {
    value: [] as object[]
  },

  reducers: {
    updateRecipes: (state, action:PayloadAction<object[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateRecipes } = recipesSlice.actions;

export const setRecipes = (state:RootState) => state.recipes.value;

export default recipesSlice.reducer;
