import React, {Component} from "react";
import {withRedux} from "../../store/wrapper";

class FomrFourtStep extends Component{

  state = {
    street: "",
    city: '',
    postalCode: '',
    phoneNumber: '',
    date:'',
    time:'',
    comments:''
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

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
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'text'} name={'street'} value={this.state.street} onChange={event => this.handleChange(event)}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Miasto</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'text'} name={'city'} value={this.state.city} onChange={event => this.handleChange(event)}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Kod pocztowy</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'number'} name={'postalCode'} value={this.state.postalCode} onChange={event => this.handleChange(event)}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Numer telefonu</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'number'} name={'phoneNumber'} value={this.state.number} onChange={event => this.handleChange(event)}/>
                </div>
              </div>
              <div className={'col-xs-6 row'}>
                <label className={'col-xs-12 form__input-section__column-section__title'}>Termin odbioru</label>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Data</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'date'} name={'date'} value={this.state.date} onChange={event => this.handleChange(event)}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Godzina</label>
                  <input className={'col-xs-7 form__input-section__column-section__input'} type={'time'} name={'time'} value={this.state.time} onChange={event => this.handleChange(event)}/>
                </div>
                <div className={'col-xs-12 row form__input-section__column-section__container'}>
                  <label className={'col-xs-5 form__input-section__column-section__label'}>Uwagi dla kuriera</label>
                  <textarea className={'col-xs-7'} rows="8" cols="50" name={'comments'} onChange={event => this.handleChange(event)} value={this.state.comments}/>
                </div>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <div className={'form__btn'}>
                <button onClick={() => this.handleClick()}>Wstecz</button>
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

const connectedComponent = withRedux(FomrFourtStep);
export {connectedComponent as FomrFourtStep}