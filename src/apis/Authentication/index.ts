import { TSignin, TSigninSuccessResponse } from '@/models/signin.model';
import api from '@/utils/api';

export async function signin(data: TSignin): Promise<TSigninSuccessResponse> {
  const res = await api.post('api/auth/login', data);
  return res.data;
}
