/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { card } from "../components/RecipesCards/types";
import type { RootState } from "./index";

export const recipesSlice = createSlice({
  name: "recipes",

  initialState: {
    value: [] as card[],
  },

  reducers: {
    updateRecipes: (state, action: PayloadAction<card[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateRecipes } = recipesSlice.actions;

export const setRecipes = (state: RootState) => state.recipes.value;

export default recipesSlice.reducer;
