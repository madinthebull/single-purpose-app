import { AUTH_USER } from "../actions";

const INITIAL_STATE = {
  authenticated: "",
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
      };

    default:
      return state;
  }
}
