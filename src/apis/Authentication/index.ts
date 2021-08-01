import { TSignin, TSigninResponse } from '@/models/signin.model';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

export async function signin(data: TSignin): Promise<AxiosResponse<TSigninResponse>> {
  const res = await api.post('api/auth/signin', data);
  return res.data;
}
