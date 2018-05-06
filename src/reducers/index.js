import { combineReducers } from "redux";

import { projectReducer } from "./project";
import { userReducer } from "./user";

export default combineReducers({
  project: projectReducer,
  user: userReducer,
});