import React, { Component } from 'react';
import { Decoration, IstagramIcon, FacebookIcon } from '../../assets/svg';
import axios from 'axios';

export class HomeContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameValidationError: false,
      emailValidationError: false,
      messageValidationError: false,
      messageSend: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateForm();
  }

  handleNameValidation() {
    const nameValidation = this.state.name.split(' ').length === 1;
    this.setState({ nameValidationError: !nameValidation });
  }

  handleEmailValidation() {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    this.setState({ emailValidationError: !emailValidation });
  }

  handleMessageValidation() {
    const messageValidation = this.state.message.length >= 120;
    this.setState({ messageValidationError: !messageValidation });
  }

  validateForm() {
    const nameValidation = this.state.nameValidationError;
    const emailValidation = this.state.emailValidationError;
    const messageValidation = this.state.messageValidationError;
    if (!nameValidation && !emailValidation && !messageValidation) {
      this.send();
      this.setState({
        name: '',
        email: '',
        message: '',
        nameValidationError: false,
        emailValidationError: false,
        messageValidationError: false,
      });
    }
  }

  send() {
    const contact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, contact, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ messageSend: true });
        }
      });
  }

  render() {
    return (
      <div className={'contact-container row'}>
        <div className={'col-xs-8'} />
        <div className={'col-xs-4 contact-form-section'}>
          <div className={'contact-form-section__title'}>
            <p>Skontaktuj się z nami</p>
            <div className={'contact-form-section__decoration'}>
              <Decoration />
              {this.state.messageSend && (
                <p className={'contact-form-section__decoration__message'}>
                  Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy
                </p>
              )}
            </div>
          </div>
          <div className={'contact-form-section__contact-form'}>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className={'row'}>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section contact-form-section__contact-form__input-section__name'}>
                  <label>Wpisz swoje imię</label>
                  <input
                    onBlur={() => this.handleNameValidation()}
                    name={'name'}
                    className={'contact-form-section__contact-form__input'}
                    type={'text'}
                    placeholder={'Krzysztof'}
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section'}>
                  <label>Wpisz swoje email</label>
                  <input
                    onBlur={() => this.handleEmailValidation()}
                    name={'email'}
                    className={'contact-form-section__contact-form__input'}
                    type={'email'}
                    placeholder={'abc@xyz.pl'}
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className={'col-xs-6 contact-form-section__contact-form__error-section contact-form-section__contact-form__error-section__name'}>
                  {this.state.nameValidationError && <label>Podane imie jest nieprawidłowe!</label>}
                </div>
                <div className={'col-xs-6 contact-form-section__contact-form__error-section'}>
                  {this.state.emailValidationError && <label>Poadany email jest nieprawidłowy!</label>}
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__textarea-section'}>
                  <label>Wpisz swoją wiadomość</label>
                  <textarea
                    onBlur={() => this.handleMessageValidation()}
                    name={'message'}
                    rows={'4'}
                    value={this.state.message}
                    onChange={e => this.handleChange(e)}
                    placeholder={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    }
                  />
                </div>
                <div
                  className={'col-xs-12 contact-form-section__contact-form__error-section contact-form-section__contact-form__error-section__desc'}
                >
                  {this.state.messageValidationError && <label>Wiadomość musi mieć conajmiej 120 znaków!</label>}
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__sbm-btn'}>
                  <input type={'submit'} value={'Wyślij'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)} />
                </div>
              </div>
            </form>
          </div>
          <div className={'contact-form-section__social-media'}>
            <FacebookIcon />
            <IstagramIcon />
          </div>
        </div>
      </div>
    );
  }
}
