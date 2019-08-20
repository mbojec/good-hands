import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import {Link} from 'react-router-dom';

class RegisterPanel extends Component{

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeatedPassword:'',
      email: '',
      passwordValidationError: false,
      repeatedPasswordValidationError: false,
      emailValidationError: false
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.validateForm()
  }

  validateForm(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidation = this.state.password.length >= 6;
    const repeatedPasswordValidation = this.state.password === this.state.repeatedPassword;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    if(passwordValidation && emailValidation && repeatedPasswordValidation){
      console.log('proper validation');
    } else {
      this.setState({
        password: '',
        repeatedPassword:'',
        email: '',
        passwordValidationError: !passwordValidation,
        repeatedPasswordValidationError: !repeatedPasswordValidation,
        emailValidationError: !emailValidation,
      })
    }
  }

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
              <input value={this.state.email} onChange={e => this.handleChange(e)} type={'text'} name={'email'} className={`login-form__form__input ${this.state.emailValidationError && "login-form__form__input--error"}`}/>
              {this.state.emailValidationError && <label className={'login-form__form__label--error'}>Podany email jest nieprawidłowy!</label>}
            </div>
            <div className={'login-form__form__password'}>
              <label className={'login-form__form__label'}>Hasło</label>
              <input value={this.state.password} onChange={e => this.handleChange(e)} type={'password'} name={'password'} className={`login-form__form__input ${this.state.passwordValidationError && "login-form__form__input--error"}`}/>
              {this.state.passwordValidationError && <label className={'login-form__form__label--error'}>Podane hasło jest za krótkie!</label>}
            </div>
            <div className={'login-form__form__repeated-password'}>
              <label className={'login-form__form__label'}>Powtórz hasło</label>
              <input value={this.state.repeatedPassword} onChange={e => this.handleChange(e)} type={'password'} name={'repeatedPassword'} className={`login-form__form__input ${this.state.repeatedPasswordValidationError && "login-form__form__input--error"}`}/>
              {this.state.repeatedPasswordValidationError && <label className={'login-form__form__label--error'}>Podane hasło nie zgadza się!</label>}
            </div>
          </div>
          <div className={'login-form__btn-section'}>
            <input type={'submit'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)} className={'login-form__btn login-form__btn--register'} value={'Załóż konto'}/>
            <button className={'login-form__btn login-form__btn--login login-form__btn--selected'}><Link to={'/logowanie'}>Zaloguj się</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterPanel;