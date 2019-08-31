import React, {Component} from "react";
import {FormFirstStep} from "./FormFirstStep";
import {FormSecondStep} from "./FormSecondStep";
import {FormThirdStep} from "./FormThirdStep";

class FormContainer extends Component{

  render() {
    return(
      <div className={'form row'}>
        <div className={'col-xs-5 col-sm-6 col-md-7 form__container'}>
          {/*<FormFirstStep/>*/}
          {/*<FormSecondStep/>*/}
          <FormThirdStep/>
        </div>
        <div className={'col-xs-7 col-sm-6 col-md-5'}/>
      </div>
    )
  }
}

export {FormContainer}