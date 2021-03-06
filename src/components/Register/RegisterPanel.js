import React, {Component} from "react";
import {Decoration} from "../../assets/svg";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {withRedux} from "../../store/wrapper";
import {withFirebase} from "../../firebase";
import { compose } from "recompose";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  password: '',
  repeatedPassword:'',
  email: '',
  passwordValidationError: false,
  repeatedPasswordValidationError: false,
  emailValidationError: false
};

class RegisterPanel extends Component{

  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.validateForm()
  }

  handlePasswordValidation(){
    const passwordValidation = this.state.password.length >= 6;
    this.setState({passwordValidationError: !passwordValidation})
  }

  handleRepeatedPasswordValidation(){
    const repeatedPasswordValidation = this.state.password === this.state.repeatedPassword;
    this.setState({repeatedPasswordValidationError: !repeatedPasswordValidation})
  }

  handleEmailValidation(){
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    this.setState({emailValidationError: !emailValidation,})
  }

  validateForm(){
    const passwordValidation = this.state.passwordValidationError;
    const repeatedPasswordValidation = this.state.repeatedPasswordValidationError;
    const emailValidation = this.state.emailValidationError;
    if(!passwordValidation && !emailValidation && !repeatedPasswordValidation){
      this.props.firebase
        .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          this.props.firebase.setUser(authUser.user.uid, this.state.email);
          this.props.onSetUid(authUser.user.uid);
          this.props.onLogin(this.state.email);
          this.setState({ ...INITIAL_STATE });
          this.props.history.push({pathname:'/'})
        })
        .catch(() => {
          this.setState({
            password: '',
            repeatedPassword:'',
            email: '',
            passwordValidationError: !passwordValidation,
            repeatedPasswordValidationError: !repeatedPasswordValidation,
            emailValidationError: !emailValidation,
          });
        });
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
          <p>Załóż konto</p>
          <Decoration/>
        </div>
        <form onSubmit={event => this.handleSubmit(event)} className={'col-xl-12 login-form__container'}>
          <div className={'login-form__form'}>
            <div className={'login-form__form__email'}>
              <label className={'login-form__form__label'}>Email</label>
              <input onBlur={() => this.handleEmailValidation()} value={this.state.email} onChange={e => this.handleChange(e)} type={'text'} name={'email'} className={`login-form__form__input ${this.state.emailValidationError && "login-form__form__input--error"}`}/>
              {this.state.emailValidationError && <label className={'login-form__form__label--error'}>Podany email jest nieprawidłowy!</label>}
            </div>
            <div className={'login-form__form__password'}>
              <label className={'login-form__form__label'}>Hasło</label>
              <input onBlur={() => this.handlePasswordValidation()} value={this.state.password} onChange={e => this.handleChange(e)} type={'password'} name={'password'} className={`login-form__form__input ${this.state.passwordValidationError && "login-form__form__input--error"}`}/>
              {this.state.passwordValidationError && <label className={'login-form__form__label--error'}>Podane hasło jest za krótkie!</label>}
            </div>
            <div className={'login-form__form__repeated-password'}>
              <label className={'login-form__form__label'}>Powtórz hasło</label>
              <input onBlur={() => this.handleRepeatedPasswordValidation()} value={this.state.repeatedPassword} onChange={e => this.handleChange(e)} type={'password'} name={'repeatedPassword'} className={`login-form__form__input ${this.state.repeatedPasswordValidationError && "login-form__form__input--error"}`}/>
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

RegisterPanel.propTypes = {
  history: PropTypes.object,
  onSetUid: PropTypes.func,
  onLogin: PropTypes.func,
  firebase: PropTypes.node,
};

const RegisterPanelHoc = compose(withFirebase, withRedux, withRouter)(RegisterPanel);
export {RegisterPanelHoc as RegisterPanel}