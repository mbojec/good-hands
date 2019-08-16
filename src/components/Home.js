import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleStep from "./HomeSimpleStep";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

class Home extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={"app-header"}>
          <HomeHeader/>
        </header>
        <main>
          <section className={'app-three-columns-section'}><HomeThreeColumns/></section>
          <section id={'simpleStepsSection'} className={'app-simple-step-section'}><HomeSimpleStep/></section>
          <section id={'aboutSection'} className={'app-about-section'}><HomeAbout/></section>
          <section id={'whoWheHelpSection'} className={'app-help-section'}><HomeWhoWeHelp/></section>
          <section id={'contactSection'} className={'app-contact-section'}><HomeContact/></section>
        </main>
      </div>
    )
  }
}

export default Home