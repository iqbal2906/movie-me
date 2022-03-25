import React from "react";

import { Route, Switch } from "react-router-dom";

import { Home, Catalog, Detail } from "../pages";

const RoutesConfig = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default RoutesConfig;
