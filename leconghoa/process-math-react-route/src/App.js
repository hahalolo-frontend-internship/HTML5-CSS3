import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./grid.scss";
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";

export default function App() {
  const [user, setUser] = useState();
  const [isSignIn, setIsSignIn] = useState("default");
  function signIn(data) {
    setIsSignIn(data);
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("isSignIn")));
  }, [isSignIn]);

  return (
    <Router>
      <Header user={user} signIn={signIn} />
      <Switch>
        <Route
          path="/login"
          render={() => (user ? <Body /> : <Login signIn={signIn} />)}
        />
        <Route
          path="/signup"
          render={() => (user ? <Body /> : <SignUp signIn={signIn} />)}
        />
        <Route exact component={Body} />
      </Switch>
      <Footer />
    </Router>
  );
}
