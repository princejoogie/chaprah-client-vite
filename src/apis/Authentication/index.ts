import { TRefreshTokenResponse } from './../../models/signin.model';
import { TSignin, TSigninSuccessResponse } from '@/models/signin.model';
import api from '@/utils/api';

export async function signin(data: TSignin): Promise<TSigninSuccessResponse> {
  const res = await api.post('api/auth/authenticate', data);
  return res.data;
}

export async function refreshToken(refreshToken: string): Promise<TRefreshTokenResponse> {
  const res = await api.post('api/auth/refresh-token', { refreshToken });
  return res.data;
}
