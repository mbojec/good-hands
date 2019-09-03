import React from "react";
import {FormFirstStep, FormSecondStep, FormThirdStep, FomrFourtStep, FormSummary, FormGratitude} from "./";
import {withRedux} from "../../store/wrapper";
import {FirebaseContext} from "../../firebase";

const FormContainer = (props) => {

  const form = () =>{
    switch (props.formStep) {
      case 1: {
        return <FormFirstStep/>;
      }
      case 2: {
        return <FormSecondStep/>;
      }
      case 3: {
        return <FormThirdStep/>;
      }
      case 4: {
        return <FomrFourtStep/>;
      }
      case 5: {
        return <FormSummary/>;
      }
      case 6: {
        return <FormGratitude/>;
      }
      default:
        return <FormFirstStep/>;
    }
  };

  return (
    <div className={'form row'}>
      <div className={'col-xs-5 col-sm-6 col-md-7 form__container'}>
        {form()}
      </div>
      <div className={'col-xs-7 col-sm-6 col-md-5'}/>
    </div>
  )
};

const connectedComponent = withRedux(FormContainer);
export {connectedComponent as FormContainer};