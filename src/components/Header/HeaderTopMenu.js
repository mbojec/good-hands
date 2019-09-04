import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Link as ScrollLink, scroller} from 'react-scroll';
import {withRedux} from "../../store/wrapper";
import { withRouter } from 'react-router-dom';
import {withFirebase} from "../../firebase";
import {compose} from "recompose";
import PropTypes from "prop-types";

class HeaderTopMenu extends Component{

  state = {
    sectionToScroll: ""
  };

  logout(){
    this.props.firebase.doSignOut().then(() =>{this.props.onLogout()});
    this.props.history.push({pathname:'/wylogowano'})
  }

  scrollToSection (destination) {
    this.props.history.push({pathname: '/'});
    this.setState({sectionToScroll: destination})
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.sectionToScroll.length > 1){
      scroller.scrollTo(this.state.sectionToScroll, {
        duration: 500,
        smooth: true,
        spy: true,
        offset: -20
      });
    }
  }


  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__top-menu__login-register'}>
          {this.props.login && <div className={'header__top-menu__login-register__user-email'}><p>{`Cześć ${this.props.userEmail}`}</p></div>}
          <button className={`header__top-menu__login-register__btn header__top-menu__login-register__btn--login ${this.props.login && 'header__top-menu__login-register__btn--pressed'}`}>{this.props.login?<Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link> : <Link to={'/logowanie'}>Zaloguj</Link>}</button>
          <button className={`header__top-menu__login-register__btn header__top-menu__login-register__btn--login ${!this.props.login && 'header__top-menu__login-register__btn--pressed'}`}>{this.props.login? <a href={'#'} onClick={() => this.logout()}>Wyloguj</a>: <Link to={'/rejestracja'}>Załóż konto</Link> }</button>
        </div>
        <nav className={'col-xs-12 header__top-menu__navigation'}>
          <button className={'header__top-menu__navigation__btn header__top-menu__navigation__btn--pressed'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('introSection')}>Start</p>
              :
              <ScrollLink to={'introSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Start</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('simpleStepsSection')}>O co chodzi?</p>
              :
              <ScrollLink to={'simpleStepsSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O co chodzi?</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('aboutSection')}>O nas</p>
              :
              <ScrollLink to={'aboutSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O nas</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('whoWheHelpSection')}>Fudacja i organizacje</p>
              :
              <ScrollLink to={'whoWheHelpSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Fudacja i organizacje</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('contactSection')}>Kontakt</p>
              :
              <ScrollLink to={'contactSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Kontakt</ScrollLink>
            }
          </button>
        </nav>
      </div>
    )
  }
}

HeaderTopMenu.propTypes = {
  history: PropTypes.object,
  firebase: PropTypes.object,
  userEmail: PropTypes.string,
  login: PropTypes.bool,
  onLogout: PropTypes.func
};

const HeaderTopMenuHoc = compose(withRedux, withRouter, withFirebase)(HeaderTopMenu);
export {HeaderTopMenuHoc as HeaderTopMenu}