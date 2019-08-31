import React, {Component} from "react";
import {HomeContact} from "../Home";
import {FormIntro, FormContainer, FormInfoStrap} from "../Form";

export class Form extends Component{
  render() {
    return(
      <>
        <main className={'app-main'}>
          <section id={'introSection'} className={'app-intro'}><FormIntro/></section>
          <section id={'infoSection'} className={'app-info-strap-section'}><FormInfoStrap/></section>
          <section id={'formSection'} className={'app-form-section'}><FormContainer/></section>
        </main>
        <footer className={'app-footer'}>
          <section id={'contactSection'} className={'app-contact-section'}><HomeContact/></section>
        </footer>
      </>
    )
  }
}