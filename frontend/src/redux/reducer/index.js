import { combineReducers } from "redux";
import userDetails from "./userReducer";

export default combineReducers({
  userReducer: userDetails
});
