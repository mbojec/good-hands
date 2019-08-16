import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";

class HomeContact extends Component{
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
            <form>
              <div className={'row'}>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section contact-form-section__contact-form__input-section__name'}>
                  <label>Wpisz swoje imię</label>
                  <input className={'contact-form-section__contact-form__input'} type={'text'} placeholder={'Krzysztof'}/>
                </div>
                <div className={'col-xs-6 contact-form-section__contact-form__input-section'}>
                  <label>Wpisz swoje email</label>
                  <input className={'contact-form-section__contact-form__input'} type={'email'} placeholder={'abc@xyz.pl'}/>
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__textarea-section'}>
                  <label>Wpisz swoją wiadomość</label>
                  <textarea rows={'4'} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </div>
                <div className={'col-xs-12 contact-form-section__contact-form__sbm-btn'}>
                  <input type={"submit"} value={'Wyślij'}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContact