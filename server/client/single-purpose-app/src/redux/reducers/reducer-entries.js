import { FETCH_ENTRIES, CREATE_ENTRY } from "../actions";

const initialState = [];
export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload.data
      };
    case CREATE_ENTRY:
      return {
        entries: [
          ...state.entries,
          {
            user: action.newEntry.user,
            date: action.newEntry.date,
            measurement: action.newEntry.measurement,
            id: action.newEntry.id
          }
        ]
      }

      default:
      return state;
  }
};


export default entriesReducer;
