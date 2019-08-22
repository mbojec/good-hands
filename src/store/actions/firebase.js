export const ADD_THREE_COLUMN_INFO = 'ADD_THREE_COLUMN_INFO';
export const CLEAR_THREE_COLUMN_INFO = 'CLEAR_THREE_COLUMN_INFO';


export const add = payload => {
  return {
    type: ADD_THREE_COLUMN_INFO,
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
