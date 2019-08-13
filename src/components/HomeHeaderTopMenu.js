import React, {Component} from "react";
import {Link} from 'react-router-dom';

class HomeHeaderTopMenu extends Component{

  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__top-menu__login-register'}>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--login'}><Link to={'/logowanie'}>Zaloguj</Link></button>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--register header__top-menu__login-register__btn--pressed'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
        </div>
        <nav className={'col-xs-12 header__top-menu__navigation'}>
          <button className={'header__top-menu__navigation__btn header__top-menu__navigation__btn--pressed'}>Start</button>
          <button className={'header__top-menu__navigation__btn'}>O co chodzi?</button>
          <button className={'header__top-menu__navigation__btn'}>O nas</button>
          <button className={'header__top-menu__navigation__btn'}>Fudacja i organizacje</button>
          <button className={'header__top-menu__navigation__btn'}>Kontakt</button>
        </nav>
      </div>
    )
  }
}

export default HomeHeaderTopMenu