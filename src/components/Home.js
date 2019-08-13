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
          <section id={'simpleStepsSection'} className={'app-simple-step-section'}>
            <HomeThreeColumns/>
            <HomeSimpleStep/>
          </section>
          <section id={'aboutSection'}><HomeAbout/></section>
          <section id={'whoWheHelpSection'}><HomeWhoWeHelp/></section>
          <section id={'contactSection'}><HomeContact/></section>
        </main>
      </div>
    )
  }
}

export default Home