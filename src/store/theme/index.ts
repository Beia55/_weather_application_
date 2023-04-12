import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ThemeVariant } from "../../utils/types";

export type ThemeState = {
  theme: ThemeVariant;
};

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeState",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<ThemeVariant>) {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectTheme = (state: { themeState: ThemeState }) => state.themeState;
export const themeReducer = themeSlice.reducer;
