export const MOVE_NEXT = 'MOVE_NEXT';
export const MOVE_PREV = 'MOVE_PREV';
export const SAVE_FORM_STEP = "SAVE_FORM_STE";


export const moveNext = () => {
  return {
    type: MOVE_NEXT
  };
};

export const movePrev = () => {
  return {
    type: MOVE_PREV
  };
};

export const saveData = payload => {
  return {
    type: SAVE_FORM_STEP,
    payload
  };
};