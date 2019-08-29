import React, {Component} from "react";
import {Header} from "../Header";
import {HomeContact} from "../Home";

export class Form extends Component{
  render() {
    return(
      <div className={'app'}>
        <header className={"app-header"}>
          <Header/>
        </header>
        <main className={'app-main'}>
          <h1>Form section</h1>
        </main>
        <footer className={'app-footer'}>
          <section id={'contactSection'} className={'app-contact-section'}><HomeContact/></section>
        </footer>
      </div>
    )
  }
}