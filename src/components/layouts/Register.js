import React from "react";
import * as comp from '../components';

export function Register() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <comp.Header/>
        </header>
        <main>
          <section className={'app-login-section'}><comp.RegisterPanel/></section>
        </main>
      </div>
    )
}