import React, {Component} from "react";
import {Decoration} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import {compose} from "recompose";


class HomeIntro extends Component{

  navigate(){
    this.props.login ? this.props.history.push({pathname: '/oddaj-rzeczy'}) : this.props.history.push({pathname: '/logowanie'});
  }

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
              <button className={'intro__btn-section__btn'} onClick={() => this.navigate()}>ODDAJ <br/> RZECZY</button>
              <button className={'intro__btn-section__btn'} onClick={() => this.navigate()}>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
            <div className={'col-xxl-1'}/>
          </div>
        </div>
      )
    }
}

HomeIntro.propTypes = {
  login: PropTypes.bool,
  history: PropTypes.object
};

const HomeIntroHoc = compose(withRedux, withRouter)(HomeIntro);
export {HomeIntroHoc as HomeIntro}