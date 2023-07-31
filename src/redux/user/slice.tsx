import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadUser: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "loadUser",
  initialState,
  reducers: {
    onGetUser: (state, {payload}) => {
      state.loading = true;
    },
    onGetUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.loadUser = payload;
    },
    onGetUserFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // onLogoutUser: (state) => {
    //   state.loadUser = [];
    //   state.loading = false;
    //   state.error = null;
    // },
  },
});

// POSSO REALIZAR MAIS DE UMA AÇÃO DENTRO DE UM SLICE?
// SE SIM, COLOCAR NO MESMO LOCAL: (LOGIN, REGISTER, LOGOUT)

export const { onGetUser, onGetUserSuccess, onGetUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
