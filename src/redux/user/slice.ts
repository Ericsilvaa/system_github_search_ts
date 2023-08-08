import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IUser from "../../interfaces/IUser";
import { RootState } from "../store";

interface IState {
  loadUser: Partial<IUser> | string
  loading: boolean,
  error: string|null,
}

const initialState: IState = {
  loadUser: {
    name: 'dev Finder',
    login: 'devFinder',
    public_repos: 10,
    followers: 7,
    following: 3,
    location: 'Brasil',
    blog: 'talcoisa.com.br',
    url: 'https://talcoisa.com',
    avatar_url: "https://s3-alpha-sig.figma.com/img/8859/ea3e/c9df73994117881587b8837cdf38354a?Expires=1691971200&Signature=Qjtq4TElDKslA55xW1xIne1eUh1IZkE1bdHMXoDnA4qHrR0Wl2hUeGFSkAtG2bmyQquMApTKb1bFPf~bpdGMDX2p9Ty3jD1eOnIpF399BAbvxpUfg9SyNqslwCCpQcUxuP0PLv8aRojt0UPfYf2Pp5~vGyfJQxiCksVPhScFbRSVAYuKOIKQK9YyVvBA4YlKBsRLl-Pej~DE-VYRRcrAg9Cj6wmgBJG7ZtSrPfN95Uo0Wds-d2Oo1rO~1GMzEwxx4fortP1fmXfHBqWItY1xranG86~2xwTPCyMg3c8xD7RfXpg1RBB~8N7povPc~WNoMdhnyg-ZSw2l6NWtHBCL3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
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