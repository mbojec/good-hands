import React, {Component} from "react";

class FormInfoStrap extends Component{

  render() {
    return(
      <div className={'form__info__container'}>
        <p className={'form__info__header'}>Ważne!</p>
        <p className={'form__info__desc'}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
      </div>
    )
  }
}

export {FormInfoStrap}