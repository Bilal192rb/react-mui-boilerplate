import axios from 'axios';
import { HOST_API } from '../config';

const httpConfig = {
  baseURL: HOST_API.BASE_URL,
};

const httpInstance = axios.create(httpConfig);

httpInstance.interceptors.response.use(
  response => Promise.resolve(response),
	error => Promise.reject(error)
);

const setAuthorization = (accessToken: string | null) => {
  if (accessToken) httpInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  else delete httpInstance.defaults.headers.common.Authorization;
};

const http = {
  request: httpInstance.request,
  get: httpInstance.get,
  post: httpInstance.post,
  put: httpInstance.put,
  delete: httpInstance.delete,
  setAuthorization,
};

export default http;
