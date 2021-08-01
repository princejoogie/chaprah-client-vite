/**
 *
 * Home
 *
 */
import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '@/store/AppStore';

export const Home: React.FC = observer(() => {
  const appStore = useAppStore();

  return (
    <div>
      <h2>Welcome</h2>
      <p>
        Full Name: {appStore.user?.firstName} {appStore.user?.lastName}
      </p>
    </div>
  );
});
