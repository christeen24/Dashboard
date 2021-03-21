import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

//components
import Signin from "./components/authPages/Signin";
import Home from "./pages/Home";

// theme and styles imports
import Theme from "../src/styles/Theme.js";
// import "./styles/scss/main.scss";

const login = localStorage.getItem("isLoggedIn");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      {login ? (
        <Router>
          <Switch>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Router>
      )}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
