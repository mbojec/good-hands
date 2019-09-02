import React, {Component} from "react";
import {HomeAbout, HomeIntro, HomeWhoWeHelp, HomeThreeColumns, HomeContact, HomeSimpleStep} from "../Home";

export class Home extends Component{
  render() {
    return (
        <>
          <main className={'app-main'}>
            <section id={'introSection'} className={'app-intro'}><HomeIntro/></section>
            <section className={'app-three-columns-section'}><HomeThreeColumns/></section>
            <section id={'simpleStepsSection'} className={'app-simple-step-section'}><HomeSimpleStep/></section>
            <section id={'aboutSection'} className={'app-about-section'}><HomeAbout/></section>
            <section id={'whoWheHelpSection'} className={'app-help-section'}><HomeWhoWeHelp/></section>
          </main>
          <footer className={'app-footer'}>
            <section id={'contactSection'} className={'app-contact-section'}>
              <HomeContact/>
            </section>
          </footer>
        </>
    )
  }
}