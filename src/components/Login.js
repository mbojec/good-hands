import React from "react";
import Header from "./Header";
import LoginPanel from "./LoginPanel";

function Login() {
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

export default Login