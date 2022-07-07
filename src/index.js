import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "./App.css"

// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { ScrollToTop } from "./components/index"

import { Provider } from "react-redux";
import  store  from "./store";

import {StateProvider} from "./ContextAPI/StateProvider";
import reducer,{initialState} from "./ContextAPI/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
