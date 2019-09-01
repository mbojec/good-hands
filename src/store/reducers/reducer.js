import { combineReducers } from "redux";
import {firebase} from "./firebase";
import {form} from "./form";

export default combineReducers({
  firebase,
  form
});