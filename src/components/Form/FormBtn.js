import React from 'react';
import {withRedux} from "../../store/wrapper";
import PropTypes from "prop-types";

const FormBtn = ({onHandleSubmit,onHandleClick, disabled, formStep}) => {

  function handleSubmit(event){
    onHandleSubmit(event)
  }

  function handleClick(){
    onHandleClick()
  }

  return(
    <>
      { formStep > 1 && <div className={'form__btn'}>
        <button onClick={() => handleClick()}>Wstecz</button>
        </div>}
      {formStep === 5
        ?
        <div className={'form__btn'}>
          <button onClick={() => handleSubmit()}>Potwierdzam</button>
        </div>
        :
        <div className={'form__btn'}>
          <input type={'submit'} value={'Dalej'} onClick={event => handleSubmit(event)} disabled={disabled}/>
        </div>}
    </>
  )

};

FormBtn.propTypes = {
  onHandleSubmit: PropTypes.func,
  onHandleClick: PropTypes.func,
  disabled: PropTypes.bool,
  formStep: PropTypes.number
};

const FormBtnHoc = withRedux(FormBtn);
export {FormBtnHoc as FormBtn};