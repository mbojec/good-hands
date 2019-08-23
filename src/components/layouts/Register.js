import React from "react";
import * as comp from '../components';
import { FirebaseContext } from '../../firebase';

export function Register() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <comp.Header/>
        </header>
        <main>
          <section className={'app-login-section'}>
            <FirebaseContext.Consumer>
              {firebase => <comp.RegisterPanel firebase={firebase} />}
            </FirebaseContext.Consumer>
          </section>
        </main>
      </div>
    )
}