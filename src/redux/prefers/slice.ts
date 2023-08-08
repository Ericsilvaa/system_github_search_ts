import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DefaultTheme } from "styled-components/dist/types";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

type prefers = {
  theme: DefaultTheme
}

const initialState: prefers = {
  theme: light
}

const prefersSlice = createSlice({
  name: "prefers",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.theme = state.theme.title === 'light' ? dark : light
    },
  }
})

export const { toggleDarkMode } = prefersSlice.actions

export default prefersSlice.reducer

export const darkMode = (state: RootState) => state.prefers.theme