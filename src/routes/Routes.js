import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/app/App";
//Route permite traer elementos
import Layout from "../containers/layout/Layout";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
