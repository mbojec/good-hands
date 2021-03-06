import React, {Component} from "react";
import {withRedux} from "../../store/wrapper";
import {FormBtn} from "./";
import PropTypes from "prop-types";

class FormFirstStep extends Component{

  state = {
    devotedThing: ''
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.props.onMoveNext();
  }

  onChange(e){
    this.setState({devotedThing: e.target.value});
  }

  render() {
    return(
      <>
        <div className={'form__num-section'}>
          <p>Krok 1/4</p>
        </div>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Zaznacz co chesz oddać:</p>
          <form onChange={ (e) => this.onChange(e)} onSubmit={event => this.handleSubmit(event)}>
            <div className={'form__input-section__checkbox-section'}>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'clothes'} value={'ubrania, które nadaja się do ponownego użycia'}/>
                <label className={'form__checkbox__label'} htmlFor={'clothes'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'clothes'}>ubrania, które nadaja się do ponownego użycia</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'clothesToTrash'} value={'ubrania, do wyrzucenia'}/>
                <label className={'form__checkbox__label'} htmlFor={'clothesToTrash'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'clothesToTrash'}>ubrania, do wyrzucenia</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'toys'} value={'zabawki'}/>
                <label className={'form__checkbox__label'} htmlFor={'toys'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'toys'}>zabawki</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'books'} value={'książki'} />
                <label className={'form__checkbox__label'} htmlFor={'books'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'books'}>książki</label>
              </div>
              <div className={"form__checkbox__container"}>
                <input type={'radio'} name={'devotedThing'} id={'other'} value={'Inne'}/>
                <label className={'form__checkbox__label'} htmlFor={'other'}/>
                <label className={'form__checkbox__label__text'} htmlFor={'other'}>Inne</label>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <FormBtn disabled={!this.state.devotedThing.length > 0} onHandleSubmit={(event) => this.handleSubmit(event)}/>
            </div>
          </form>
        </div>
      </>
    )
  }
}

FormFirstStep.propTypes = {
  onSaveData: PropTypes.func,
  onMoveNext: PropTypes.func
};

const FormFirstStepHoc = withRedux(FormFirstStep);
export {FormFirstStepHoc as FormFirstStep}