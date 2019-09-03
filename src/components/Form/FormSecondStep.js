import React, {Component} from "react";
import {withRedux} from "../../store/wrapper";
import {FormBtn, FormSelectSection} from "./";

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
    this.props.onSaveData(this.state);
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
          <p>Krok 2/4</p>
        </div>
        <div className={'form__input-section'}>
          <p className={'form__input-section__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className={'form__input-section__checkbox-section'}>
              <div>
                <label>Liczna 60l worków: </label>
                <div className={'form__select-container'}>
                  <FormSelectSection value={this.state.numberOfBags} onHandleSelect={(event) => this.handleChange(event)}/>
                </div>
              </div>
            </div>
            <div className={'form__btn-section'}>
              <FormBtn disabled={!this.state.numberOfBags > 0} onHandleClick={() => this.handleClick()} onHandleSubmit={(event) => this.handleSubmit(event)}/>
            </div>
          </form>
        </div>
      </>
    )
  }
}
const FormSecondStepHoc = withRedux(FormSecondStep);
export {FormSecondStepHoc as FormSecondStep}