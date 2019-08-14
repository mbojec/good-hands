import React, {Component} from "react";
import HomeHeaderTopMenu from "./HomeHeaderTopMenu";
import HomeHeaderIntro from "./HomeHeaderIntro";

class HomeHeader extends Component{
  
  render() {
    return(
      <div className={'header-container'}>
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-5 col-xxl-5'}/>
          <div className={'col-xs-7 col-xxl-7'}>
            <div className={'row'} style={{height: '100%'}}>
              <div className={'col-xl-1 col-xxl-2'}/>
              <div className={'col-xs-12 col-xl-11 col-xxl-10'}><HomeHeaderTopMenu/></div>
              <div className={'col-xs-11'}><HomeHeaderIntro/></div>
              <div className={'col-xs-1'}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader