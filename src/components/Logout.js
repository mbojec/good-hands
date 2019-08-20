import React from "react";
import LogoutPanel from "./LogoutPanel";
import LogoutHeader from "./LogoutHeader";

function Logout() {
  return(
    <div className={'app'}>
      <header className={"app-header--login"}>
        <LogoutHeader/>
      </header>
      <main>
        <section className={'app-login-section'}><LogoutPanel/></section>
      </main>
    </div>
  )
}

export default Logout