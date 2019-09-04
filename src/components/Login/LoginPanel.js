import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Decoration} from "../../assets/svg";
import { withRouter } from 'react-router-dom';
import {withRedux} from "../../store/wrapper";
import {withFirebase} from "../../firebase";
import {compose} from "recompose";
import PropTypes from "prop-types";


const INITIAL_STATE = {
  password: '',
  repeatedPassword:'',
  email: '',
  passwordValidationError: false,
  emailValidationError: false
};

class LoginPanel extends Component{

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      passwordValidationError: false,
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

  handlePasswordValidation(){
    const passwordValidation = this.state.password.length >= 6;
    this.setState({passwordValidationError: !passwordValidation})
  }

  handleEmailValidation(){
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    this.setState({emailValidationError: !emailValidation,})
  }

  validateForm(){
    const passwordValidation = this.state.passwordValidationError;
    const emailValidation = this.state.emailValidationError;
    if(!passwordValidation && !emailValidation){
      this.props.firebase
        .doSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          this.props.onLogin(this.state.email);
          this.props.onSetUid(authUser.user.uid);
          this.setState({ ...INITIAL_STATE });
          this.props.history.push({pathname:'/'})
        })
        .catch(() => {
          this.setState({
            password: '',
            repeatedPassword:'',
            email: '',
            passwordValidationError: !passwordValidation,
            emailValidationError: !emailValidation,
          });
        });
    } else {
      this.setState({
        password: '',
        email: '',
        passwordValidationError: !passwordValidation,
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
              <input onBlur={() => this.handleEmailValidation()} value={this.state.email} onChange={e => this.handleChange(e)} type={'text'} name={'email'} className={`login-form__form__input ${this.state.emailValidationError && "login-form__form__input--error"}`}/>
              {this.state.emailValidationError && <label className={'login-form__form__label--error'}>Podany email jest nieprawidłowy!</label>}
            </div>
            <div className={'login-form__form__password'}>
              <label className={'login-form__form__label'}>Hasło</label>
              <input onBlur={() => this.handlePasswordValidation()} value={this.state.password} onChange={e => this.handleChange(e)} type={'password'} name={'password'} className={`login-form__form__input ${this.state.passwordValidationError && "login-form__form__input--error"}`}/>
              {this.state.passwordValidationError && <label className={'login-form__form__label--error'}>Podane hasło albo email jest nieprawidłowe !</label>}
            </div>
          </div>
          <div className={'login-form__btn-section'}>
            <button className={'login-form__btn login-form__btn--register'}><Link to={'/rejestracja'}>Załóż konto</Link></button>
            <input type={'submit'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)} className={'login-form__btn login-form__btn--login login-form__btn--selected'} value={'Zaloguj się'}/>
          </div>
        </form>
      </div>
    )
  }
}
LoginPanel.propTypes = {
  firebase: PropTypes.node,
  history: PropTypes.object,
  onSetUid: PropTypes.func,
  onLogin: PropTypes.func
};

const LoginPanelHoc = compose(withFirebase, withRedux, withRouter)(LoginPanel);
export {LoginPanelHoc as LoginPanel}

