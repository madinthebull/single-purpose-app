import { combineReducers } from "redux";
import EntriesReducer from "./reducer-entries";

const rootReducer = combineReducers({
  entries: EntriesReducer,
});

export default rootReducer;
