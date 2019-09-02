export const ADD_THREE_COLUMN_INFO = 'ADD_THREE_COLUMN_INFO';
export const LOG_IN = "LOG_IN";
export const LOG_OUT = 'LOG_OUT';
export const SET_UID = 'SET_UID';


export const add = payload => {
  return {
    type: ADD_THREE_COLUMN_INFO,
    payload
  };
};

export const logIn = userEmail => {
  return {
    type: LOG_IN,
    userEmail
  };
};

export const logOut = payload => {
  return {
    type: LOG_OUT,
  };
};

export const setUid = payload => {
  return {
    type: SET_UID,
    payload
  };
};

export const fetchData = (firebase) => dispatch => {
  firebase.getData().then(res => dispatch(add(res)))
};

