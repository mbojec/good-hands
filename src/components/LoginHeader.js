import React, {Component} from "react";
import HomeHeaderTopMenu from "./HomeHeaderTopMenu";

function LoginHeader() {
    return(
      <div className={'header-container--login'}>
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-5 col-xxl-5'}/>
          <div className={'col-xs-7 col-xxl-7'}>
            <div className={'row'} style={{height: '100%'}}>
              <div className={'col-xl-1 col-xxl-2'}/>
              <div className={'col-xs-12 col-xl-11 col-xxl-10'}><HomeHeaderTopMenu/></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginHeader