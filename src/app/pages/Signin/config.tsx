import { TRoute } from '@/types/route';
import { Signin } from '.';

const SigninConfig: TRoute = {
  path: '/',
  component: Signin,
  type: 'public',
  exact: true,
};

export default SigninConfig;
