import React, {Component} from "react";

class FormThirdStep extends Component{

  state = {
    city: 0
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
      <div className={'form__checkboxes-section'}>
        <p className={'form__checkboxes-section__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label>Liczna 60l worków: </label>
            <div className={'form__checkboxes-section__select-container'}>
              <select value={this.state.city} onChange={ (e) => this.handleChange(e)}>
                <option value={0}>-- wybierz --</option>
                <option value={1}>Poznań</option>
                <option value={2}>Warszawa</option>
                <option value={3}>Kraków</option>
                <option value={4}>Katowice</option>
                <option value={5}>Wrocław</option>
              </select>
            </div>
          </div>
          <label style={{fontSize: '24px', marginTop: '20px', marginBottom: '20px'}}>Komu chesz pomóc?</label>
          <div className={'form__target__section'}>
            <div className={"form__checkbox-container"}>
              <label className={'checkboxLabel--third'} htmlFor={'clothes'}>dzieciom</label>
              <input type={'checkbox'} name={'devotedThing'} id={'clothes'} value={'clothes'}/>
            </div>
            <div className={"form__checkbox-container"}>
              <label className={'checkboxLabel--third'} htmlFor={'clothesToTrash'}>samotnym matkom</label>
              <input type={'checkbox'} name={'devotedThing'} id={'clothesToTrash'} value={'clothesToTrash'} onChange={(e) => this.onChange(e)}/>
            </div>
            <div className={"form__checkbox-container"}>
              <label className={'checkboxLabel--third'} htmlFor={'toys'}>bezdomnym</label>
              <input type={'checkbox'} name={'devotedThing'} id={'toys'} value={'toys'} onChange={(e) => this.onChange(e)}/>
            </div>
            <div className={"form__checkbox-container"}>
              <label className={'checkboxLabel--third'} htmlFor={'books'}>niepoełnosprawnym</label>
              <input type={'checkbox'} name={'devotedThing'} value={'books'} id={'books'} onChange={(e) => this.onChange(e)}/>
            </div>
            <div className={"form__checkbox-container"}>
              <label className={'checkboxLabel--third'} htmlFor={'other'}>osobom starszym</label>
              <input type={'checkbox'} name={'devotedThing'} id={'other'} value={'other'} onChange={(e) => this.onChange(e)}/>
            </div>
          </div>
          <label style={{fontSize: '24px'}}>Wpisz nazwę konkretnej organizacji</label>
          <input type={'text'} className={'organization-input'}/>
          <div className={'form__btn__section'}>
            <div className={'form__btn'}>
              <button>Wstecz</button>
            </div>
            <div className={'form__btn'}>
              <input type={'submit'} value={'Dalej'}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export {FormThirdStep}