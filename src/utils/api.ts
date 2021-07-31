import axios from "axios";
import _ from "lodash";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  responseType: "json",
});

axiosInstance.interceptors.request.use(function (config) {
  //   const store = appStore;

  //   if (store?.userToken) {
  config.headers.common["Authorization"] = `Bearer jkajsnhpqw`;
  config.baseURL = process.env.REACT_APP_API_BASE || "";
  //   }

  return config;
});

export const baseUrl: string | undefined = process.env.REACT_APP_API_BASE;

export default _.clone(axiosInstance);
