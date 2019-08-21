import React, {Component} from "react";
import * as comp from '../components';

export class Home extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={"app-header"}>
          <comp.Header/>
        </header>
        <main className={'app-main'}>
          <section className={'app-intro'}><comp.HomeIntro/></section>
          <section className={'app-three-columns-section'}><comp.HomeThreeColumns/></section>
          <section id={'simpleStepsSection'} className={'app-simple-step-section'}><comp.HomeSimpleStep/></section>
          <section id={'aboutSection'} className={'app-about-section'}><comp.HomeAbout/></section>
          <section id={'whoWheHelpSection'} className={'app-help-section'}><comp.HomeWhoWeHelp/></section>
        </main>
        <footer className={'app-footer'}>
          <section id={'contactSection'} className={'app-contact-section'}><comp.HomeContact/></section>
        </footer>
      </div>
    )
  }
}