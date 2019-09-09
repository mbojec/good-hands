export const FETCH_DATA = 'FETCH_DATA';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SET_UID = 'SET_UID';

export const add = payload => {
  return {
    type: FETCH_DATA,
    payload,
  };
};

export const logIn = userEmail => {
  return {
    type: LOG_IN,
    userEmail,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const setUid = payload => {
  return {
    type: SET_UID,
    payload,
  };
};

export const fetchData = firebase => dispatch => {
  firebase.getData().then(res => dispatch(add(res)));
};
