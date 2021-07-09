import Header from "./layouts/header/Header";
import Body from "./layouts/body/Body";
import Footer from "./layouts/footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import "./grid.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState();
  const [isSignIn, setIsSignIn] = useState();
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
        <Route path="/" exact component={Body} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
