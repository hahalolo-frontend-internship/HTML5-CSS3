import React from "react";
import Header from "../Header";
import Main1 from "../Main/Main1";
import Main from "../Main";
import Main2 from "../Main/Main2";
import Footer from "../Footer";
import NotFound from "../NotFound";

import { Route, Switch, useRouteMatch } from "react-router-dom";

///render={props => <Main1 {...props} />}
Container.propTypes = {};

function Container(props) {
  const match = useRouteMatch();
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${match.url}`} component={Main} />
        <Route exact path={`${match.url}main1/:id`} component={Main1} />
        <Route exact path={`${match.url}main1/:id/main2`} component={Main2} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
export default Container;
