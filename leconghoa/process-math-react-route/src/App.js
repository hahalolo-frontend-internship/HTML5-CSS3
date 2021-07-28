import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./grid.scss";
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/login"
          render={() =>
            localStorage.getItem("isSignIn") ? <Body /> : <Login />
          }
        />
        <Route
          path="/signup"
          render={() =>
            localStorage.getItem("isSignIn") ? <Body /> : <SignUp />
          }
        />
        <Route exact component={Body} />
      </Switch>
      <Footer />
    </Router>
  );
}
