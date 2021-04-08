import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../containers/Landing";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
//Route permite traer elementos
import Layout from "../containers/layout/Layout";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
