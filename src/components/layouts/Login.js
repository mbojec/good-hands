import React from "react";
import * as comp from '../components';

export function Login() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <comp.Header/>
        </header>
        <main>
          <section className={'app-login-section'}><comp.LoginPanel/></section>
        </main>
      </div>
    )
}

// export default Login