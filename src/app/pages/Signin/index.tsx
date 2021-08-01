/**
 *
 * Signin
 *
 */
import React from 'react';
import { observer } from 'mobx-react';

import { useState } from 'react';
import useSignin from '@/app/core/useSignin';
import { useAppStore } from '@/store/AppStore';

export const Signin: React.FC = observer(() => {
  const { login, mutation, errorMessage } = useSignin();
  const appStore = useAppStore();
  console.log(appStore.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      {!!errorMessage && <p className="my-2 text-xs text-red-500">{errorMessage}</p>}
      <input
        className="px-4 py-2 mt-2 border border-gray-300 rounded"
        placeholder="Email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="px-4 py-2 mt-2 border border-gray-300 rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:opacity-90 focus:opacity-70">
        {mutation.isLoading ? 'Loading...' : 'Sign in'}
      </button>
    </form>
  );
});
