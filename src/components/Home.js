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
          <HomeThreeColumns/>
          <HomeSimpleStep/>
          <HomeAbout/>
          <HomeWhoWeHelp/>
          <HomeContact/>
        </main>
      </div>
    )
  }
}

export default Home