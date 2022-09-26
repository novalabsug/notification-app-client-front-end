import { combineReducers } from "redux";

import client from "./Client";
import auth from "./auth";
import company from "./company";

export default combineReducers({
  client,
  auth,
  company,
});
