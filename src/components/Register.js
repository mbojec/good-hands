import React, {Component} from "react";
import RegisterHeader from "./RegisterHeader";
import RegisterPanel from "./RegisterPanel";

class Register extends Component{
  render() {
    return(
      <div className={'app'}>
        <header className={"app-header--login"}>
          <RegisterHeader/>
        </header>
        <main>
          <section className={'app-login-section'}><RegisterPanel/></section>
        </main>
      </div>
    )
  }
}

export default Register