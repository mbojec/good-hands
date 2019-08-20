import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll'

class HeaderTopMenu extends Component{

  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__top-menu__login-register'}>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--login'}><Link to={'/logowanie'}>Zaloguj</Link></button>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--register header__top-menu__login-register__btn--pressed'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
        </div>
        <nav className={'col-xs-12 header__top-menu__navigation'}>
          <button className={'header__top-menu__navigation__btn header__top-menu__navigation__btn--pressed'}>Start</button>
          <button className={'header__top-menu__navigation__btn'}>
            <ScrollLink to={'simpleStepsSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O co chodzi?</ScrollLink>
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            <ScrollLink to={'aboutSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O nas</ScrollLink>
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            <ScrollLink to={'whoWheHelpSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Fudacja i organizacje</ScrollLink>
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            <ScrollLink to={'contactSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Kontakt</ScrollLink>
          </button>
        </nav>
      </div>
    )
  }
}

export default HeaderTopMenu