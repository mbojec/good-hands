import React from "react";
import Decoration from "../assets/svg/Decoration";

export function LogoutPanel() {

  return(
      <div className={'login-container row'}>
        <div className={'col-xl-12 logout-title'}>
          <p>Wylogowanie nastąpiło <br/> pomyślnie!</p>
          <Decoration/>
        </div>
        <div className={'col-xl-12 logout-section'}>
          <button className={'logout-btn'}>Strona główna</button>
        </div>
      </div>
    )
}