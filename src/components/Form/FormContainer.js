import React, {Component} from "react";
import {FormFirstStep} from "./FormFirstStep";
import {FormSecondStep} from "./FormSecondStep";

class FormContainer extends Component{

  render() {
    console.log(this.state);
    return(
      <div className={'form row'}>
        <div className={'col-xs-5 col-sm-6 col-md-7 form__content'}>
          <div className={'form__num-section'}>
            <p>Krok 1/4</p>
          </div>
          <FormSecondStep/>
        </div>
        <div className={'col-xs-7 col-sm-6 col-md-5'}/>
      </div>
    )
  }
}

export {FormContainer}