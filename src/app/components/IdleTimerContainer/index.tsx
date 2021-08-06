/**
 *
 * IdleTimerContainer
 *
 */
import * as React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { observer } from 'mobx-react-lite';
import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { useAppStore } from 'store/AppStore';
import { refreshToken } from '@/apis/Authentication/index';
import api from 'utils/api';

export const IdleTimerContainer = observer(() => {
  const appStore = useAppStore();
  const storeRefreshToken = appStore.refreshToken;
  const timeReset = 15 * 1000 * 60; // 15 minutes
  const timeRefresh = 4.9 * 1000 * 60; // 5 minutes
  const [userActive, setUserActive] = useState(true);
  const history = useHistory();

  const mutation = useMutation(() => refreshToken(storeRefreshToken), {
    onSuccess: response => {
      const { jwtToken, refreshToken } = response;
      if (jwtToken) {
        appStore.updateUserToken(jwtToken, refreshToken);
        api.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
      } else {
        appStore.clearPersistedData();
      }
    },
    onError: () => {
      setUserActive(false); // because API something went wrong. We should be redirect to signin page
      history.push('/signin');
    },
  });

  useEffect(() => {
    if (userActive) {
      const interval = setInterval(async () => {
        await mutation.mutateAsync();
      }, timeRefresh);
      return () => {
        clearInterval(interval);
      };
    } else {
      history.push('/signin');
    }
  }, [history, mutation, timeRefresh, userActive]);

  const handleOnIdle = async () => {
    setUserActive(false);
    return <Redirect to="/signin" />;
  };

  const handleOnAction = () => {
    setUserActive(true);
  };

  const handleOnActive = () => {
    setUserActive(true);
  };

  useIdleTimer({
    timeout: timeReset, //1000 * 60 * 15,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
  });

  return <div> </div>;
});
