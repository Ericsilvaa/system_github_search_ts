import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadUser: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "loadUser",
  initialState,
  reducers: {
    onLoadUser: (state) => {
      state.loading = true;
    },
    onLoadUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.loadUser = payload;
    },
    onLoadUserFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    onLogoutUser: (state) => {
      state.loadUser = [];
      state.loading = false;
      state.error = null;
    },
  },
});

// POSSO REALIZAR MAIS DE UMA AÇÃO DENTRO DE UM SLICE?
// SE SIM, COLOCAR NO MESMO LOCAL: (LOGIN, REGISTER, LOGOUT)

export const { onLoadUser, onLoadUserSuccess, onLoadUserFailure, onLogoutUser } =
  userSlice.actions;

export default userSlice.reducer;
