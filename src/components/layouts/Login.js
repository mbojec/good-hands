import React from "react";
import {LoginPanel} from "../Login";
import {Header} from "../Header";

export function Login() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <Header/>
        </header>
        <main>
          <section className={'app-login-section'}><LoginPanel/></section>
        </main>
      </div>
    )
}

// export default Login