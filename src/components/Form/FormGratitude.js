import React from "react";
import {Decoration} from "../../assets/svg";

const FormGratitude = () => {

    return(
      <div className={'form__gratitude__container'}>
        <p>Dziękujemy za przesłanie formularza <br/>
          Na maila prześlemy wszelkie <br/>
          informacje o odbiorze.</p>
        <Decoration/>
      </div>
    )

};

export {FormGratitude}