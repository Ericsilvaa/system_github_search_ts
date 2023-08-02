import { combineReducers } from "redux";

// reducers
import userReducer from "./user/slice";
import prefersReducer from "./prefers/slice";


export const rootReducer = combineReducers({
  user: userReducer,
  prefers:prefersReducer
  // 2. Add your reducer names here.
});