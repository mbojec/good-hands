import React, {Component} from "react";
class FormFirstStep extends Component{

  state = {
    clothes: false,
    clothesToTrash: false,
    toys: false,
    books: false,
    other: false
  };

  onHandleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  onChange(e){
    this.setState({[e.target.value]: e.target.checked});
  }

  render() {
    console.log(this.state);
    return(
      <div className={'form__checkboxes-section'}>
        <p className={'form__checkboxes-section__title'}>Zaznacz co chesz oddać:</p>
        <form onChange={ (e) => this.onChange(e)} onSubmit={event => this.onHandleSubmit(event)}>
          <div className={"form__checkbox-container"}>
            <input type={'checkbox'} name={'devotedThing'} id={'clothes'} value={'clothes'}/>
            <label className={'checkboxLabel'} htmlFor={'clothes'}/><label className={'checkboxLabelText'} htmlFor={'clothes'}>ubrania, które nadaja się do ponownego użycia</label>
          </div>
          <div className={"form__checkbox-container"}>
            <input type={'checkbox'} name={'devotedThing'} id={'clothesToTrash'} value={'clothesToTrash'} onChange={(e) => this.onChange(e)}/>
            <label className={'checkboxLabel'} htmlFor={'clothesToTrash'}/><label className={'checkboxLabelText'} htmlFor={'clothesToTrash'}>ubrania, do wyrzucenia</label>
          </div>
          <div className={"form__checkbox-container"}>
            <input type={'checkbox'} name={'devotedThing'} id={'toys'} value={'toys'} onChange={(e) => this.onChange(e)}/>
            <label className={'checkboxLabel'} htmlFor={'toys'}/><label className={'checkboxLabelText'} htmlFor={'toys'}>zabawki</label>
          </div>
          <div className={"form__checkbox-container"}>
            <input type={'checkbox'} name={'devotedThing'} value={'books'} id={'books'} onChange={(e) => this.onChange(e)}/>
            <label className={'checkboxLabel'} htmlFor={'books'}/><label className={'checkboxLabelText'} htmlFor={'books'}>książki</label>
          </div>
          <div className={"form__checkbox-container"}>
            <input type={'checkbox'} name={'devotedThing'} id={'other'} value={'other'} onChange={(e) => this.onChange(e)}/>
            <label className={'checkboxLabel'} htmlFor={'other'}/><label className={'checkboxLabelText'} htmlFor={'other'}>Inne</label>
          </div>
          <div className={'form__btn'}>
            <input type={'submit'} value={'Dalej'}/>
          </div>
        </form>
      </div>
    )
  }
}

export {FormFirstStep}