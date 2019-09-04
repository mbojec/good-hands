import React, {Component} from "react";
import {Decoration, Steps} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";

class FormIntro extends Component{
  render() {
    return(
      <div className={'row--ful-height intro-container--form'}>
        <div className={'col-xs-5 col-xxl-5'}/>
        <div className={'col-xs-7 col-xxl-7 intro-content'}>
          <div className={'col-xs-12 intro__title'}><p>Oddaj rzeczy, których już nie chesz</p></div>
          <div className={'col-xs-12 intro__title'}><p>POTRZEBUJĄCYM</p></div>
          <div className={'col-xs-12 intro__decoration'}><Decoration/></div>
          <div className={'col-xs-12 intro__dsc-section'}>
            <div>Wystarczą 4 proste kroki:</div>
          </div>
          <div className={'col-xs-12 intro__steps-section'}>
            <Steps/>
          </div>
        </div>
      </div>
    )
  }
}

const FormIntroHoc = withRedux(FormIntro);
export {FormIntroHoc as FormIntro}