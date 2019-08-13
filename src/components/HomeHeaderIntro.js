import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";

class HomeHeaderIntro extends Component{

  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__intro__title'}><p>Zacznij pomagać!</p></div>
        <div className={'col-xs-12 header__intro__title'}><p>Oddaj niechciane rzeczy w zaufane ręcę</p></div>
        <div className={'col-xs-12 header__intro__decoration'}><Decoration/></div>
        <div className={'col-xxl-1'}/>
        <div className={'col-xs-12 col-xxl-10 header__intro__btn-section'}>
          <button className={'header__intro__btn-section__btn'}>ODDAJ <br/> RZECZY</button>
          <button className={'header__intro__btn-section__btn'}>ZORGANIZUJ ZBIÓRKĘ</button>
        </div>
        <div className={'col-xxl-1'}/>
      </div>
    )
  }
}

export default HomeHeaderIntro