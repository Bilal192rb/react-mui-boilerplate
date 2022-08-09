import axios from 'axios';
import { HOST_API } from '../config';

const httpConfig = {
  baseURL: HOST_API.BASE_URL,
};

const httpInstance = axios.create(httpConfig);

httpInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject((error.response && error.response.data) || { message: 'Something went wrong' })
);

const http = {
  request: httpInstance.request,
  get: httpInstance.get,
  post: httpInstance.post,
  put: httpInstance.put,
  delete: httpInstance.delete,
};

export default http;
