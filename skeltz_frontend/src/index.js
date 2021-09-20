import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {ThemeProvider} from "styled-components";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./signin";
import Dashboard from "./dashboard";
import Create from "./create";
import Account from "./account";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <ThemeProvider theme={{}}> */}
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/account" component={Account} />
        {/* </ThemeProvider> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
