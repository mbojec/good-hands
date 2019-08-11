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
          <button>Start</button>
          <button>O co chodzi?</button>
          <button>O nas</button>
          <button>Fudacja i organizacje</button>
          <button>Kontakt</button>
        </nav>
      </div>
    )
  }
}

export default HeaderTopMenu