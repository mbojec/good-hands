import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import {Link} from 'react-router-dom';

class RegisterPanel extends Component{

  render() {
    return(
      <div className={'login-container row'}>
        <div className={'col-xl-12 login-title'}>
          <p>Zaloguj się</p>
          <Decoration/>
        </div>
        <form onSubmit={event => this.handleSubmit(event)} className={'col-xl-12 login-form__container'}>
          <div className={'login-form__form'}>
            <div className={'login-form__form__email'}>
              <label className={'login-form__form__label'}>Email</label>
              <input type={'text'} name={'email'} className={`login-form__form__input`}/>
            </div>
            <div className={'login-form__form__password'}>
              <label className={'login-form__form__label'}>Hasło</label>
              <input type={'password'} name={'password'} className={`login-form__form__input`}/>
            </div>
            <div className={'login-form__form__repeated-password'}>
              <label className={'login-form__form__label'}>Powtórz hasło</label>
              <input type={'password'} name={'repeatPassword'} className={`login-form__form__input`}/>
            </div>
          </div>
          <div className={'login-form__btn-section'}>
            <button className={'login-form__btn login-form__btn--register'}>Załóż konto</button>
            <button className={'login-form__btn login-form__btn--login login-form__btn--selected'}><Link to={'/logowanie'}>Zaloguj się</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterPanel;