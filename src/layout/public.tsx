import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { TRouteComponent } from '@/types/route';
import { Container } from '@/app/components/Core/Container';

interface Props extends RouteProps {
  component: TRouteComponent;
}

function PublicLayout({ component: Component, ...rest }: Props): ReactElement {
  return (
    <Route
      {...rest}
      render={props => (
        <Container>
          <p className="text-xs text-red-500">Public Route</p>
          <Component {...props} />
        </Container>
      )}
    />
  );
}
export default PublicLayout;
