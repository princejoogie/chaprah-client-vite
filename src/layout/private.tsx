import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { TRouteComponent } from '@/types/route';
import { Container } from '@/app/components/Core/Container';
import { useAppStore } from '@/store/AppStore';
import Paths from '@/app/constants/Paths';

interface Props extends RouteProps {
  component: TRouteComponent;
}

function PrivateLayout({ component: Component, ...rest }: Props): ReactElement {
  const { user } = useAppStore();
  const loggedIn = !!user?.firstName;

  if (!loggedIn) {
    return <Redirect to={Paths.signin} />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Container>
          <p className="text-xs text-red-500">Private Route</p>
          <Component {...props} />
        </Container>
      )}
    />
  );
}
export default PrivateLayout;
