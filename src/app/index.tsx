import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { routes } from "../config/routes";
import PublicLayout from "../layout/public";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((item, index) => {
          const Layout = PublicLayout;
          return (
            <Layout
              key={index}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
