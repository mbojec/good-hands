import React from "react";
import Header from "../Header";
import RegisterPanel from "../RegisterPanel";

export function Register() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <Header/>
        </header>
        <main>
          <section className={'app-login-section'}><RegisterPanel/></section>
        </main>
      </div>
    )
}

// export default Register