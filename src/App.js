import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import * as comp from './components'
import {withRedux} from "./store/wrapper";
import {withFirebase} from "./firebase";
import PropTypes from 'prop-types';
import {compose} from "recompose";

class App extends Component{

  componentDidMount() {
    this.props.onFetchData(this.props.firebase);
  }

  render() {
    return (
      <BrowserRouter>
        <div className={'app'}>
          <header className={"app-header"}>
            <comp.Header/>
          </header>
          <Switch>
            <Route exact path={'/'} component={comp.Home}/>
            <Route exact path={'/logowanie'} component={comp.Login}/>
            <Route exact path={'/rejestracja'} component={comp.Register}/>
            <Route exact path={'/wylogowano'} component={comp.Logout}/>
            <Route exact path={'/oddaj-rzeczy'} component={comp.Form}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  onFetchData: PropTypes.func,
  firebase: PropTypes.object,
};

const AppHoc = compose(withFirebase, withRedux)(App);
export {AppHoc as App}
