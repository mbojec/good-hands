import React, {Component} from "react";

class FormSecondStep extends Component{

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
      <div className={'form__checkboxes-section'}>
        <p className={'form__checkboxes-section__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label>Liczna 60l worków: </label>
            <div className={'form__checkboxes-section__select-container'}>
              <select value={this.state.numberOfBags} onChange={ (e) => this.handleChange(e)}>
                <option value={0}>-- wybierz --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>
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

export {FormSecondStep}