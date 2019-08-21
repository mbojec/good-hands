import React from "react";
import LogoutPanel from "../LogoutPanel";
import Header from "../Header";

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