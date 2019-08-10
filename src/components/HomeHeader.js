import React, {Component} from "react";
import Image from '../assets/images/Home-Hero-Image.jpg'

class HomeHeader extends Component{


  render() {

    return(
      <div className={'header-container'} style={{backgroundImage: `url(${Image})`}}>
        <div className={'row'}>

        </div>
      </div>
    )
  }
}

export default HomeHeader