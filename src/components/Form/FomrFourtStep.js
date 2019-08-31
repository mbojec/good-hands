import React, {Component} from "react";

class FomrFourtStep extends Component{

  state = {
    numberOfBags: 0
  };

  handleChange(event) {
    this.setState({numberOfBags: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }


  render() {
    console.log(this.state);
    return(
      <>
        <div className={'form__num-section'}>
          <p>Krok 4/4</p>
        </div>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className={'form__input-section__column-section row'}>
              <div className={'col-xs-6 row'}>
                <label className={'col-xs-12 form__input-section__column-section__title'}>Adres odbioru</label>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Ulica</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'text'}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Miasto</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'text'}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Kod pocztowy</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'number'}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Numer telefonu</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'number'}/>
                </div>
              </div>
              <div className={'col-xs-6 row'}>
                <label className={'col-xs-12 form__input-section__column-section__title'}>Termin odbioru</label>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Data</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'date'}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Godzina</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'time'}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Uwagi dla kuriera</label>
                  <textarea className={'col-xs-7'} rows="8" cols="50"/>
                </div>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <div className={'form__btn'}>
                <button>Wstecz</button>
              </div>
              <div className={'form__btn'}>
                <input type={'submit'} value={'Dalej'}/>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export {FomrFourtStep}