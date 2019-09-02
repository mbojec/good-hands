export const ADD_THREE_COLUMN_INFO = 'ADD_THREE_COLUMN_INFO';
export const CLEAR_THREE_COLUMN_INFO = 'CLEAR_THREE_COLUMN_INFO';
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

export const remove = () => {
  return {
    type: CLEAR_THREE_COLUMN_INFO,
  };
};

export const asyncRemove = () => dispatch => {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
    dispatch(remove());
  }, 2000);
};

export const fetchData = (firebase) => dispatch => {
  firebase.getData().then(res => dispatch(add(res)))
};

