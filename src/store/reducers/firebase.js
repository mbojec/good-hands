import { ADD_THREE_COLUMN_INFO, CLEAR_THREE_COLUMN_INFO, LOG_IN, LOG_OUT } from "../actions/firebase";

const initialState = {
  bags: 0,
  organizations: 0,
  founds: 0,
  login: false,
  userEmail: ''
};

const firebase = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THREE_COLUMN_INFO:
      const copy = {
        ...state,
        ...action.payload
      };
      return copy;

    case CLEAR_THREE_COLUMN_INFO:
      return {
        ...state,
        bags: 0,
        organizations: 0,
        founds: 0
      };

    case LOG_IN:
      return {
        ...state,
        login: true,
        userEmail: action.userEmail
      };

    case LOG_OUT:
      return {
        ...state,
        login: false
      };

    default:
      return state;
  }
};

export {firebase};