import { TRoute } from '@/types/route';
import { Signup } from '.';

const SignupConfig: TRoute = {
  path: '/signup',
  component: Signup,
  type: 'private',
};

export default SignupConfig;
