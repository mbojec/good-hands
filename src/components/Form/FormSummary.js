import React from "react";
import {Reload, Things} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";
import {FormBtn} from "./";
import {withFirebase} from "../../firebase";
import {compose} from "recompose";

const FormSummary = (props) => {

  function handleSubmit() {
    const donation = {
      street: props.street,
      city: props.city,
      postalCode: props.postalCode,
      phoneNumber: props.phoneNumber,
      date: props.date,
      time: props.time,
      comments: props.comments,
      numberOfBags: props.numberOfBags,
      devotedThing: props.devotedThing,
      targetGroup: props.targetGroup,
      foundationCity: props.foundationCity
    };
    props.firebase.setDonation(props.uid, donation);
    props.onMoveNext();
  }

  function handleClick(){
    props.onMovePrev();
  }

  return (
    <>
      <div className={'form__input-section'}>
        <p className={'form__input-section__title'}>Podsumowanie Twojej darowizny</p>
        <div className={'summary__container'}>
          <p className={'col-xs-12 form__input-section__column-section__title'}>Oddajesz</p>
          <div className={'col-xs-12 summary__card'}>
            <div className={'summary__icon'}><Things/></div><p className={'summary__desc'}>{`${props.numberOfBags} worek/worki, ${props.devotedThing}, ${props.targetGroup}`}</p>
          </div>
          <div className={'col-xs-12 summary__card'}>
            <div className={'summary__icon'}><Reload/></div><p className={'summary__desc'}>{`do lokalizacji: ${props.foundationCity}`}</p>
          </div>
        </div>
        <div className={'form__input-section--container'}>
          <div className={'form__input-section__column-section row'}>
            <div className={'col-xs-6 row'}>
              <p className={'col-xs-12 form__input-section__column-section__title'}>Adres odbioru</p>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Ulica</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.street}</p>
              </div>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Miasto</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.city}</p>
              </div>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Kod pocztowy</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.postalCode}</p>
              </div>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Numer telefonu</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.phoneNumber}</p>
              </div>
            </div>
            <div className={'col-xs-6 row'}>
              <label className={'col-xs-12 form__input-section__column-section__title'}>Termin odbioru</label>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Data</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.date}</p>
              </div>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Godzina</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.time}</p>
              </div>
              <div className={'col-xs-12 row form__input-section__column-section__container'}>
                <p className={'col-xs-5 form__input-section__column-section__label'}>Uwagi dla kuriera</p>
                <p className={'col-xs-7 form__input-section__column-section__label'}>{props.comments}</p>
              </div>
            </div>
          </div>
          <div className={'form__btn-section'}>
            <FormBtn onHandleClick={() => handleClick()} onHandleSubmit={(event) => handleSubmit(event)}/>
          </div>
        </div>
      </div>
    </>
  )
};

const FormSummaryHoc = compose(withFirebase, withRedux)(FormSummary);
export {FormSummaryHoc as FormSummary}