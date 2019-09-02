import { FETCH_DATA, LOG_IN, LOG_OUT, SET_UID } from "../actions/firebase";

const initialState = {
  uid:'',
  numberOfBags: 0,
  numberOfOrganizations: 0,
  numberOfFounds: 0,
  organizations: [],
  foundations: [],
  collections: [],
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

    case FETCH_DATA:
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
        userEmail: '',
        login: false
      };

    default:
      return state;
  }
};

export {firebase};