import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import {Link} from 'react-router-dom';

class LoginPanel extends Component{

  render() {
    return(
      <div className={'login-container row'}>
        <div className={'col-xl-12 login-title'}>
          <p>Zaloguj się</p>
          <Decoration/>
        </div>
        <div className={'col-xl-12 login-form__container'}>
          <div className={'login-form__form'}>
            <div className={'login-form__form__email'}>
              <label className={'login-form__form__label'}>Email</label>
              <input type={'email'} name={'email'} className={'login-form__form__input'}/>
            </div>
            <div className={'login-form__form__password'}>
              <label className={'login-form__form__label'}>Hasło</label>
              <input type={'password'} name={'password'} className={'login-form__form__input'}/>
            </div>
          </div>
          <div className={'login-form__btn-section'}>
            <button className={'login-form__btn login-form__btn--register'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
            <button className={'login-form__btn login-form__btn--login login-form__btn--selected'}>Zaloguj się</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPanel;