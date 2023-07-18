import { combineReducers } from "redux";

import userReducer from "./user/slice";


export default combineReducers({
  user: userReducer
  // 2. Add your reducer names here.
});