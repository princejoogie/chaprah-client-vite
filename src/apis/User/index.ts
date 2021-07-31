import { TUser } from '@/models/user.model';

export async function getProfile(): Promise<TUser> {
  return {
    firstName: 'Prince',
    lastName: 'Juguilon',
  };
}
