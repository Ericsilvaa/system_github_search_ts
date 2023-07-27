import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const {toggleDarkMode} = prefersSlice.actions

export default prefersSlice.reducer