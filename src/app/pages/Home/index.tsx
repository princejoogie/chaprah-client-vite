/**
 *
 * Home
 *
 */
import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '@/store/AppStore';
import { useHistory } from 'react-router-dom';
import PathURL from '@/app/constants/Paths';

export const Home: React.FC = observer(() => {
  const appStore = useAppStore();
  const history = useHistory();

  const signout = () => {
    appStore.clearPersistedData();
    history.push(PathURL.signin);
  };

  return (
    <div>
      <h2>Welcome</h2>
      <p>
        Full Name: {appStore.user?.firstName} {appStore.user?.lastName}
      </p>

      <button
        onClick={signout}
        className="px-4 py-2 text-white bg-red-500 border-none rounded hover:opacity-70 focus:ring-2 focus:ring-blue-600"
      >
        Sign out
      </button>
    </div>
  );
});
