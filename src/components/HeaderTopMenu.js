import React, {Component} from "react";

class HeaderTopMenu extends Component{

  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__top-menu__login-register'}>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--login'}>Zaloguj</button>
          <button className={'header__top-menu__login-register__btn header__top-menu__login-register__btn--register header__top-menu__login-register__btn--pressed'}>Załóż konto</button>
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

export default HeaderTopMenu