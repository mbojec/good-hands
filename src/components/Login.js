import React from "react";
import LoginHeader from "./LoginHeader";
import LoginPanel from "./LoginPanel";

function Login() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <LoginHeader/>
        </header>
        <main>
          <section className={'app-login-section'}><LoginPanel/></section>
        </main>
      </div>
    )
}

export default Login