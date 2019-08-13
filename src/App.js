import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/logowanie'} component={Login}/>
        <Route exact path={'/rejestracja'} component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
