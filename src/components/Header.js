import React from "react";
import * as comp from './components'

export function Header() {
  return(
    <div className={'header-container'}>
      <div className={'row--ful-height'}>
        <div className={'col-xs-5 col-xxl-5'}/>
        <div className={'col-xs-7 col-xxl-7'}>
          <div className={'row--ful-height'}>
            <div className={'col-xl-1 col-xxl-2'}/>
            <div className={'col-xs-12 col-xl-11 col-xxl-10'}><comp.HeaderTopMenu/></div>
          </div>
        </div>
      </div>
    </div>
  )
}