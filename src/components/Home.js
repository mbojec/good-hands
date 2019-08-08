import React, {Component} from "react";
import HomeHeader from "./HomeHeader";

class Home extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={"app-header"}>
          <HomeHeader/>
        </header>
      </div>
    )
  }
}

export default Home