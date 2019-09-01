import React, {Component} from "react";
import {Reload, Things} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";

class FormSummary extends Component{

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.props.onMoveNext();
  }

  handleClick(){
    this.props.onMovePrev();
  }

  render() {
    console.log(this.state);
    return(
      <>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Podsumowanie Twojej darowizny</p>
          <div className={'summary__container'}>
            <p className={'col-xs-12 form__input-section__column-section__title'}>Oddajesz</p>
            <div className={'col-xs-12 summary__card'}>
              <div className={'summary__icon'}><Things/></div><p className={'summary__desc'}>4 worki, urania w dobrym stanie</p>
            </div>
            <div className={'col-xs-12 summary__card'}>
              <div className={'summary__icon'}><Reload/></div><p className={'summary__desc'}>do lokalizacji: Warszawa</p>
            </div>
          </div>
          <div className={'form__input-section--container'}>
            <div className={'form__input-section__column-section row'}>
              <div className={'col-xs-6 row'}>
                <p className={'col-xs-12 form__input-section__column-section__title'}>Adres odbioru</p>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Ulica</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.street}</p>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Miasto</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.city}</p>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Kod pocztowy</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.postalCode}</p>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Numer telefonu</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.phoneNumber}</p>
                </div>
              </div>
              <div className={'col-xs-6 row'}>
                <label className={'col-xs-12 form__input-section__column-section__title'}>Termin odbioru</label>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Data</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.date}</p>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Godzina</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.time}</p>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <p className={'col-xs-5 form__input-section__column-section__label'}>Uwagi dla kuriera</p>
                  <p className={'col-xs-7 form__input-section__column-section__label'}>{this.props.comments}</p>
                </div>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <div className={'form__btn'}>
                <button onClick={() => this.handleClick()}>Wstecz</button>
              </div>
              <div className={'form__btn'}>
                <input type={'submit'} value={'Potwierdzam'}/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


const connectedComponent = withRedux(FormSummary);
export {connectedComponent as FormSummary}