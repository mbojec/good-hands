import React from "react";
import {Header} from "../Header";
import {RegisterPanel} from "../Register";
import { FirebaseContext } from '../../firebase';

export function Register() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <Header/>
        </header>
        <main>
          <section className={'app-login-section'}>
            <FirebaseContext.Consumer>
              {firebase => <RegisterPanel firebase={firebase} />}
            </FirebaseContext.Consumer>
          </section>
        </main>
      </div>
    )
}