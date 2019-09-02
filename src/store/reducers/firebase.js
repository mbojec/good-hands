import { ADD_THREE_COLUMN_INFO, LOG_IN, LOG_OUT, SET_UID } from "../actions/firebase";

const initialState = {
  uid:'',
  numberOfBags: 0,
  numberOfOrganizations: 0,
  numberOfFounds: 0,
  login: false,
  userEmail: ''
};

const firebase = (state = initialState, action) => {
  switch (action.type) {
    case SET_UID:
      return {
        ...state,
        uid: action.payload
      };

    case ADD_THREE_COLUMN_INFO:
      return {
        ...state,
        ...action.payload
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