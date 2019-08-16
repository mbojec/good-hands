import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import IstagramIcon from "../assets/svg/Istagram";
import FacebookIcon from "../assets/svg/Facebook";
import axios from 'axios';

class HomeContact extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameValidationError: false,
      emailValidationError: false,
      messageValidationError: false,
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
    const nameValidation = this.state.name.split(' ').length === 1;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    const messageValidation = this.state.message.length >= 120;
    if(nameValidation && emailValidation && messageValidation){
      this.send();
    } else {
      this.setState({
        name: '',
        email: '',
        message: '',
        nameValidationError: nameValidation,
        emailValidationError: emailValidation,
        messageValidationError: messageValidation
      })
    }
  }

  send(){
    const contact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    axios.post(`https://fer-api.coderslab.pl/v1/portfolio/contact`,{ contact }, {headers: {
        "Content-Type": "application/json"
      }} )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return(
      <div className={'contact-container row'}>
        <div className={'col-xs-8'}/>
        <div className={'col-xs-4 contact-form-section'}>
          <div className={'contact-form-section__title'}>
            <p>Skontaktuj się z nami</p>
            <div className={'contact-form-section__decoration'}>
              <Decoration/>
            </div>
          </div>
          <div className={'contact-form-section__contact-form'}>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className={'row'}>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section contact-form-section__contact-form__input-section__name'}>
                  <label>Wpisz swoje imię</label>
                  <input name={'name'} className={'contact-form-section__contact-form__input'} type={'text'} placeholder={'Krzysztof'} value={this.state.name} onChange={e => this.handleChange(e)}/>
                </div>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section'}>
                  <label>Wpisz swoje email</label>
                  <input name={'email'} className={'contact-form-section__contact-form__input'} type={'email'} placeholder={'abc@xyz.pl'} value={this.state.email} onChange={e => this.handleChange(e)}/>
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__textarea-section'}>
                  <label>Wpisz swoją wiadomość</label>
                  <textarea name={'message'} rows={'4'} value={this.state.message} onChange={e => this.handleChange(e)} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__sbm-btn'}>
                  <input type={"submit"} value={'Wyślij'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)}/>
                </div>
              </div>
            </form>
          </div>
          <div className={'contact-form-section__social-media'}>
            <FacebookIcon/>
            <IstagramIcon/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContact