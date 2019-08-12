import React, {Component} from "react";
import HeaderTopMenu from "./HeaderTopMenu";
import Image from '../assets/images/Home-Hero-Image.jpg'

class HomeHeader extends Component{
  
  render() {
    return(
      <div className={'header-container'} style={{backgroundImage: `url(${Image})`}}>
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-6'}/>
          <div className={'col-xs-6'}>
            <div className={'row'} style={{height: '100%'}}>
              <div className={'col-xl-1 col-xxl-2'}/>
              <div className={'col-xs-12 col-xl-11 col-xxl-10'}><HeaderTopMenu/></div>
              <div className={'col-xs-10'}/>
              <div className={'col-xs-2'}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader