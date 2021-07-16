import React, { Suspense } from "react";
import Registration from "./compoment/User/Registration";
import Login from "./compoment/User/Login";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import NotFound from "./compoment/NotFound";
import Loading from "./compoment/Loading";
const Container = React.lazy(() => import("./compoment/Container"));

function App() {
  return (
    <Suspense fallback={Loading}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route path="/" component={Container} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
