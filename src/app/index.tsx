import React, { ReactElement } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { routes } from '@/config/routes';
import PublicLayout from '@/layout/public';
import { NotFound } from '@/app/components/NotFound';
import PrivateLayout from '@/layout/private';

export function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((item, index) => {
          const Layout = item.type === 'public' ? PublicLayout : PrivateLayout;
          return <Layout key={index} path={item.path} component={item.component} exact={item.exact} />;
        })}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
