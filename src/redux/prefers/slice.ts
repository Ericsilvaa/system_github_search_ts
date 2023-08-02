import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type prefers = {
  dark: boolean
}

const initialState: prefers = {
  dark: false
}

const prefersSlice = createSlice({
  name: "prefers",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.dark = !state.dark;
    },
  }
})

export const { toggleDarkMode } = prefersSlice.actions

export default prefersSlice.reducer

export const darkMode = (state: RootState) => state.prefers