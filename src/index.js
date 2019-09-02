import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/store";
import { Provider } from "react-redux";
import Firebase, { FirebaseContext } from "./firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <FirebaseContext.Consumer>
        {firebase => <App firebase={firebase} />}
      </FirebaseContext.Consumer>
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
