import React, {Component} from "react";
import {FormFirstStep} from "./FormFirstStep";
import {FormSecondStep} from "./FormSecondStep";
import {FormThirdStep} from "./FormThirdStep";
import {FomrFourtStep} from "./FomrFourtStep";
import {FormGratitude} from "./FormGratitude";
import {FormSummary} from "./FormSummary";
import {withRedux} from "../../store/wrapper";

class FormContainer extends Component{

  render() {
    let form;
    switch (this.props.formStep) {
      case 1: {
        form = <FormFirstStep/>;
        break
      }
      case 2: {
        form = <FormSecondStep/>;
        break
      }
      case 3: {
        form = <FormThirdStep/>;
        break
      }
      case 4: {
        form = <FomrFourtStep/>;
        break
      }
      case 5: {
        form = <FormSummary/>;
        break
      }
      default:
        form = <FormFirstStep/>;
        break
    }
    console.log(form);
    return(
      <div className={'form row'}>
        <div className={'col-xs-5 col-sm-6 col-md-7 form__container'}>
          {form}
        </div>
        <div className={'col-xs-7 col-sm-6 col-md-5'}/>
      </div>
    )
  }
}

const connectedComponent = withRedux(FormContainer);
export {connectedComponent as FormContainer};