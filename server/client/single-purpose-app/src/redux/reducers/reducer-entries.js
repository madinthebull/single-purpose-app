import { FETCH_ENTRIES, CREATE_ENTRY } from "../actions";

const initialState = [];
export const entriesReducer = (state = initialState, action, newEntry) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload.data
      };
    case CREATE_ENTRY:
      return {
        ...state,
        newEntry
      }

      default:
      return state;
  }
};


export default entriesReducer;
