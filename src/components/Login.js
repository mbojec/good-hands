import React, {Component} from "react";
import LoginHeader from "./LoginHeader";
import LoginPanel from "./LoginPanel";

class Login extends Component{
  render() {
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
}

export default Login