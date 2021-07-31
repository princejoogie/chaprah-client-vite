import { TSignin } from '@/models/signin.model';

export async function signin(): Promise<TSignin> {
  return {
    success: true,
    jwtToken: 'ksndipu12h3807chb1ho2p19dnskljnd1208uch10e8u',
  };
}
