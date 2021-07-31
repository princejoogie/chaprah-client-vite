import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouteType = 'private' | 'public';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TRouteComponent = ComponentType<RouteComponentProps<any>> | ComponentType<any>;
export type TRoute = {
  path: string;
  component: TRouteComponent;
  type?: RouteType;
  exact?: boolean;
  headerEmpty?: boolean;
};
