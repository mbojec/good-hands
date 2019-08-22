import { ADD_THREE_COLUMN_INFO, CLEAR_THREE_COLUMN_INFO } from "../actions/firebase";

const initialState = {
  bags: 0,
  organizations: 0,
  founds: 0
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
        bags: 0,
        organizations: 0,
        founds: 0
      };

    default:
      return state;
  }
};

export {firebase};