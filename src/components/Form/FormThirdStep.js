import React, {Component} from "react";
import {withRedux} from "../../store/wrapper";

class FormThirdStep extends Component{

  state = {
    foundationCity: '',
    children: false,
    singleMothers:false,
    homeless: false,
    handicap: false,
    elderPeople: false,
    organizationName: '',
    targetGroup:""
  };

  handleSelect(event) {
    this.setState({foundationCity: event.target.value});
  }

  handleChange(event) {
    this.setState({[event.target.value]: event.target.checked, targetGroup: event.target.id});
  }

  handleInput(event){
    this.setState({organizationName: event.target.value})
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.props.onSaveData({organizationName: this.state.organizationName,
      targetGroup:this.state.targetGroup, foundationCity: this.state.foundationCity});
    this.props.onMoveNext();
  }

  handleClick(){
    this.props.onMovePrev();
  }

  isDataValid(){
    return this.state.foundationCity.length > 0 &&
      (this.state.children || this.state.singleMothers || this.state.homeless || this.state.handicap || this.state.elderPeople)
  }


  render() {
    console.log(this.state);
    return(
      <>
        <div className={'form__num-section'}>
          <p>Krok 3/4</p>
        </div>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Lokalizacja:</p>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className={'form__input-section__checkbox-section'}>
              <div className={'form__select-container'}>
                  <select value={this.state.foundationCity} onChange={ (e) => this.handleSelect(e)}>
                    <option value={""}>-- wybierz --</option>
                    <option value={"Poznań"}>Poznań</option>
                    <option value={"Warszawa"}>Warszawa</option>
                    <option value={'Kraków'}>Kraków</option>
                    <option value={"Katowice"}>Katowice</option>
                    <option value={'Wrocław'}>Wrocław</option>
                  </select>
              </div>
              <label className={'form__input-section__subtitle'}>Komu chesz pomóc?</label>
              <div className={'form__target__section'}>
                <div className={"form__checkbox__container"}>
                  <label className={`form__checkbox__label--third ${this.state.children && 'form__checkbox__label--third--selected'}`} htmlFor={'dzieciom'}>dzieciom</label>
                  <input type={'checkbox'} name={'devotedThing'} id={'dzieciom'} value={'children'} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className={"form__checkbox__container"}>
                  <label className={`form__checkbox__label--third ${this.state.singleMothers && 'form__checkbox__label--third--selected'}`} htmlFor={'samotnym matkom'}>samotnym matkom</label>
                  <input type={'checkbox'} name={'devotedThing'} id={'samotnym matkom'} value={'singleMothers'} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className={"form__checkbox__container"}>
                  <label className={`form__checkbox__label--third ${this.state.homeless && 'form__checkbox__label--third--selected'}`} htmlFor={'bezdomnym'}>bezdomnym</label>
                  <input type={'checkbox'} name={'devotedThing'} id={'bezdomnym'} value={'homeless'} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className={"form__checkbox__container"}>
                  <label className={`form__checkbox__label--third ${this.state.handicap && 'form__checkbox__label--third--selected'}`} htmlFor={'niepoełnosprawnym'}>niepoełnosprawnym</label>
                  <input type={'checkbox'} name={'devotedThing'} value={'handicap'} id={'niepoełnosprawnym'} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className={"form__checkbox__container"}>
                  <label className={`form__checkbox__label--third ${this.state.elderPeople && 'form__checkbox__label--third--selected'}`} htmlFor={'osobom starszym'}>osobom starszym</label>
                  <input type={'checkbox'} name={'devotedThing'} id={'osobom starszym'} value={'elderPeople'} onChange={(e) => this.handleChange(e)}/>
                </div>
              </div>
              <label className={'form__input-section__subtitle'}>Wpisz nazwę konkretnej organizacji</label>
              <input type={'text'} value={this.state.organizationName} className={'organization-input form__input-section__organization'} onChange={event => this.handleInput(event)}/>
            </div>
            <div className={'form__btn-section'}>
              <div className={'form__btn'}>
                <button onClick={() => this.handleClick()} >Wstecz</button>
              </div>
              <div className={'form__btn'}>
                <input type={'submit'} value={'Dalej'} disabled={!this.isDataValid()}/>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const connectedComponent = withRedux(FormThirdStep);
export {connectedComponent as FormThirdStep}