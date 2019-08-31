import React, {Component} from "react";


const checkboxes = [
  {
    value: 'clothes',
    key: 'checkBox1',
    label: 'ubrania, które nadaja się do ponownego użycia',
  },
  {
    value: 'clothesToTrash',
    key: 'checkBox2',
    label: 'ubrania, do wyrzucenia',
  },
  {
    value: 'toys',
    key: 'checkBox3',
    label: 'zabawki',
  },
  {
    value: 'books',
    key: 'checkBox4',
    label: 'książki',
  },
  {
    value: 'other',
    key: 'checkBox5',
    label: 'Inne',
  }
];

class FormContainer extends Component{

  state = {
    clothes: false,
    clothesToTrash: false,
    toys: false,
    books: false,
    other: false
  };

  onChange(e){
    this.setState({
    [e.target.name]: e.target.checked
    })
  }

  render() {
    return(
      <div className={'form row'}>
        <div className={'col-xs-5 col-sm-6 col-md-7 form__content'}>
          <div className={'form__num-section'}>
            <p>Krok 1/4</p>
          </div>
          <div className={'form__checkboxes-section'}>
            <p className={'form__checkboxes-section__title'}>Zaznacz co chesz oddać:</p>
            <form onChange={ (e) => this.onChange(e)}>
              <div className={"form__checkbox-container"}>
                <input type={'checkbox'} name={'devotedThing'} id={'clothes'} value={'clothes'}/>
                <label className={'checkboxLabel'} for={'clothes'}/><label className={'checkboxLabelText'} for={'clothes'}>ubrania, które nadaja się do ponownego użycia</label>
              </div>
              <div className={"form__checkbox-container"}>
                <input type={'checkbox'} name={'devotedThing'} id={'clothesToTrash'} value={'clothesToTrash'} onChange={(e) => this.onChange(e)}/>
                <label className={'checkboxLabel'} for={'clothesToTrash'}/><label className={'checkboxLabelText'} for={'clothesToTrash'}>ubrania, do wyrzucenia</label>
              </div>
              <div className={"form__checkbox-container"}>
                <input type={'checkbox'} name={'devotedThing'} id={'toys'} value={'toys'} onChange={(e) => this.onChange(e)}/>
                <label className={'checkboxLabel'} for={'toys'}/><label className={'checkboxLabelText'} for={'toys'}>zabawki</label>
              </div>
              <div className={"form__checkbox-container"}>
                <input type={'checkbox'} name={'devotedThing'} value={'books'} id={'books'} onChange={(e) => this.onChange(e)}/>
                <label className={'checkboxLabel'} for={'books'}/><label className={'checkboxLabelText'} for={'books'}>książki</label>
              </div>
              <div className={"form__checkbox-container"}>
                <input type={'checkbox'} name={'devotedThing'} id={'other'} value={'other'} onChange={(e) => this.onChange(e)}/>
                <label className={'checkboxLabel'} for={'other'}/><label className={'checkboxLabelText'} for={'other'}>Inne</label>
              </div>
            </form>
          </div>
          <div className={'form__btn-section'}>

          </div>
        </div>
        <div className={'col-xs-7 col-sm-6 col-md-5'}/>
      </div>
    )
  }
}

export {FormContainer}