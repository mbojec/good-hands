import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import * as comp from './components'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={comp.Home}/>
        <Route exact path={'/logowanie'} component={comp.Login}/>
        <Route exact path={'/rejestracja'} component={comp.Register}/>
        <Route exact path={'/wylogowano'} component={comp.Logout}/>
        <Route exact path={'/oddaj-rzeczy'} component={comp.Form}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
