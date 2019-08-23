import React from "react";
import {Header} from "../Header";
import {LogoutPanel} from "../Logout";

export function Logout() {
  return(
    <div className={'app'}>
      <header className={"app-header--login"}>
        <Header/>
      </header>
      <main>
        <section className={'app-login-section'}><LogoutPanel/></section>
      </main>
    </div>
  )
}

// export default Logout