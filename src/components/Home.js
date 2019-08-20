import React, {Component} from "react";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleStep from "./HomeSimpleStep";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import Header from "./Header";
import HomeHeaderIntro from "./HomeHeaderIntro";

class Home extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={"app-header"}>
          <Header/>
        </header>
        <main className={'app-main'}>
          <section className={'app-intro'}><HomeHeaderIntro/></section>
          <section className={'app-three-columns-section'}><HomeThreeColumns/></section>
          <section id={'simpleStepsSection'} className={'app-simple-step-section'}><HomeSimpleStep/></section>
          <section id={'aboutSection'} className={'app-about-section'}><HomeAbout/></section>
          <section id={'whoWheHelpSection'} className={'app-help-section'}><HomeWhoWeHelp/></section>
        </main>
        <footer className={'app-footer'}>
          <section id={'contactSection'} className={'app-contact-section'}><HomeContact/></section>
        </footer>
      </div>
    )
  }
}

export default Home