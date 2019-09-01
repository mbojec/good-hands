import {MOVE_NEXT, MOVE_PREV, SAVE_FORM_STEP} from "../actions/form";

const initialState = {
  formStep: 1,
  numberOfBags: 0,
  devotedThing: '',
  foundationCity: '',
  children: false,
  singleMothers:false,
  homeless: false,
  handicap: false,
  elderPeople: false,
  organizationName: '',
  street: "",
  city: '',
  postalCode: '',
  phoneNumber: '',
  date:'',
  time:'',
  comments:''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_NEXT:{
      return {
        ...state,
        formStep: state.formStep + 1
      };
    }
    case MOVE_PREV:{
      return {
        ...state,
        formStep: state.formStep - 1
      };
    }

    case SAVE_FORM_STEP:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export {form};