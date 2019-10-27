import { combineReducers } from "redux";
import EntriesReducer from "./reducer-entries";
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({
  entries: EntriesReducer,
  auth: AuthReducer,
});

export default rootReducer;
