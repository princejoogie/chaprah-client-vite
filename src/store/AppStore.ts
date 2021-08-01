import React from 'react';
import { makeAutoObservable } from 'mobx';
import { makePersistable, clearPersistedStore, isHydrated, isPersisting } from 'mobx-persist-store';
import { TUser } from '@/models/user.model';

export class AppStore {
  jwtToken = '';
  refreshToken = '';
  user: TUser | null = null;

  constructor() {
    makeAutoObservable(this);

    makePersistable(
      this,
      {
        name: 'AppStore',
        properties: ['jwtToken', 'refreshToken', 'user'],
        storage: window.localStorage,
        stringify: true,
        debugMode: false,
      },
      {
        delay: 0,
      },
    );
  }

  get isHydrated(): boolean {
    return isHydrated(this);
  }

  get isPersisting(): boolean {
    return isPersisting(this);
  }

  async clearPersistedData(): Promise<void> {
    await clearPersistedStore(this);
  }

  async updateUserToken(token: string, refreshToken: string): Promise<void> {
    this.jwtToken = token;
    this.refreshToken = refreshToken;
  }

  updateProfile(data: TUser | null): void {
    this.user = data;
  }
}

export const appStore = new AppStore();
export const AppStoreContext = React.createContext(appStore);
export const useAppStore = (): AppStore => React.useContext(AppStoreContext);
