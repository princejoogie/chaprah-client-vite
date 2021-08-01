import { useState } from 'react';
import { useAppStore } from '@/store/AppStore';
import { useMutation, UseMutationResult } from 'react-query';
import { TSignin, TSigninResponse } from '@/models/signin.model';
import { signin } from '@/apis/Authentication';
import api from '@/utils/api';
import { useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios';

interface TReturn {
  errorMessage: string | null;
  login: (data: TSignin) => Promise<void>;
  mutation: UseMutationResult<AxiosResponse<TSigninResponse>, unknown, TSignin, unknown>;
}

const useSignin = (): TReturn => {
  const appStore = useAppStore();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation((item: TSignin) => signin(item), {
    onSuccess: response => {
      const { jwtToken, refreshToken } = response.data;

      if (jwtToken) {
        appStore.updateUserToken(jwtToken, refreshToken);
        api.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
        appStore.updateProfile({ firstName: 'Prince Carlo', lastName: 'Juguilon' });
        history.push('/');
      } else {
        appStore.clearPersistedData();
        appStore.updateProfile(null);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: () => {
      setErrorMessage('Something went wrong, Please try again later.');
    },
  });

  async function login(data: TSignin) {
    setErrorMessage(null);
    await mutation.mutateAsync(data);
  }

  return {
    errorMessage,
    login,
    mutation,
  };
};

export default useSignin;
