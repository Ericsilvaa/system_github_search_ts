import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IUser from "../../interfaces/IUser";
import { RootState } from "../store";

interface IState {
  loadUser: IUser | string
  loading: boolean,
  error: string|null,
}

const initialState: IState = {
  loadUser: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "loadUser",
  initialState,
  reducers: {
    onGetUser: (state, { payload }: PayloadAction<string> ) => {
      state.loading = true;
      state.loadUser = payload
      state.error= null;
    },
    onGetUserSuccess: (state, { payload }: PayloadAction<IUser>) => {
      state.loading = false;
      state.loadUser = payload;
    },
    onGetUserFailure: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});


export const { onGetUser, onGetUserSuccess, onGetUserFailure } =
  userSlice.actions;

export default userSlice.reducer;





// selector
export const getStateUser = (state: RootState) => state.user