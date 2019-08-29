import React from "react";
import {RegisterPanel} from "../Register";
import { FirebaseContext } from '../../firebase';

export function Register() {
    return(
        <main>
          <section className={'app-login-section'}>
            <FirebaseContext.Consumer>
              {firebase => <RegisterPanel firebase={firebase} />}
            </FirebaseContext.Consumer>
          </section>
        </main>
    )
}