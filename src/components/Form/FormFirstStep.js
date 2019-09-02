import React, {Component} from "react";
import {withRedux} from "../../store/wrapper";

class FormFirstStep extends Component{

  state = {
    devotedThing: ''
  };

  onHandleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.onSaveData(this.state);
    this.props.onMoveNext();
  }

  onChange(e){
    this.setState({devotedThing: e.target.value});
  }

  render() {
    console.log(this.state);
    return(
      <>
        <div className={'form__num-section'}>
          <p>Krok 1/4</p>
        </div>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Zaznacz co chesz oddać:</p>
          <form onChange={ (e) => this.onChange(e)} onSubmit={event => this.onHandleSubmit(event)}>
            <div className={'form__input-section__checkbox-section'}>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'clothes'} value={'clothes'}/>
                <label className={'form__checkbox__label'} htmlFor={'clothes'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'clothes'}>ubrania, które nadaja się do ponownego użycia</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'clothesToTrash'} value={'clothesToTrash'}/>
                <label className={'form__checkbox__label'} htmlFor={'clothesToTrash'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'clothesToTrash'}>ubrania, do wyrzucenia</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'toys'} value={'toys'}/>
                <label className={'form__checkbox__label'} htmlFor={'toys'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'toys'}>zabawki</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} value={'books'} id={'books'}/>
                <label className={'form__checkbox__label'} htmlFor={'books'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'books'}>książki</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'other'} value={'other'}/>
                <label className={'form__checkbox__label'} htmlFor={'other'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'other'}>Inne</label>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <div className={'form__btn'}>
                <input disabled={!this.state.devotedThing.length > 0} type={'submit'} value={'Dalej'}/>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const connectedComponent = withRedux(FormFirstStep);
export {connectedComponent as FormFirstStep}