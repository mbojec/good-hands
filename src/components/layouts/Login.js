import React from "react";
import {LoginPanel} from "../Login";
import {FirebaseContext} from "../../firebase";

export function Login() {
    return(
        <main>
          <section className={'app-login-section'}>
            <FirebaseContext.Consumer>
              {firebase => <LoginPanel firebase={firebase} />}
            </FirebaseContext.Consumer>
          </section>
        </main>
    )
}