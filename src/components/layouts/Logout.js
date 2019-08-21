import React from "react";
import * as comp from '../components';

export function Logout() {
  return(
    <div className={'app'}>
      <header className={"app-header--login"}>
        <comp.Header/>
      </header>
      <main>
        <section className={'app-login-section'}><comp.LogoutPanel/></section>
      </main>
    </div>
  )
}

// export default Logout