import React, { ReactElement } from "react";
import { Route, RouteProps } from "react-router-dom";
import { TRouteComponent } from "types/route";

interface Props extends RouteProps {
  component: TRouteComponent;
}

function PublicLayout({ component: Component, ...rest }: Props): ReactElement {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          <Component {...props} />
        </div>
      )}
    />
  );
}
export default PublicLayout;
