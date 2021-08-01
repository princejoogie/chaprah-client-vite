import { TRoute } from '@/types/route';
import { Home } from '.';

const HomeConfig: TRoute = {
  path: '/',
  component: Home,
  type: 'private',
  exact: true,
};

export default HomeConfig;
