import axios from 'axios';
import _ from 'lodash';
import { appStore } from '@/store/AppStore';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});

axiosInstance.interceptors.request.use(function (config) {
  const store = appStore;

  if (store?.jwtToken) {
    config.headers.common['Authorization'] = `Bearer ${store.jwtToken}`;
    config.baseURL = 'http://localhost:5000';
  }

  return config;
});

export const baseUrl: string | undefined = 'http://localhost:5000';

export default _.clone(axiosInstance);
