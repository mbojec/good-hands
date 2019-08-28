import React, {Component} from "react";
import {Decoration} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";

class HomeIntro extends Component{
    render() {
      return(
        <div className={'row--ful-height intro-container'}>
          <div className={'col-xs-5 col-xxl-5'}/>
          <div className={'col-xs-7 col-xxl-7 intro-content'}>
            <div className={'col-xs-12 intro__title'}><p>Zacznij pomagać!</p></div>
            <div className={'col-xs-12 intro__title'}><p>Oddaj niechciane rzeczy w zaufane ręcę</p></div>
            <div className={'col-xs-12 intro__decoration'}><Decoration/></div>
            <div className={'col-xxl-1'}/>
            <div className={'col-xs-12 col-xxl-10 intro__btn-section'}>
              <button className={'intro__btn-section__btn'} onClick={event => this.props.onAddInfo()}>ODDAJ <br/> RZECZY</button>
              <button className={'intro__btn-section__btn'} onClick={event => this.props.onClear()}>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
            <div className={'col-xxl-1'}/>
          </div>
        </div>
      )
    }
}

const connectedComponent = withRedux(HomeIntro);
export {connectedComponent as HomeIntro}