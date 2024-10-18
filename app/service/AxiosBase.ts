import axios from 'axios';

const AxiosBase = axios.create({
  baseURL: 'localhost:9000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosBase.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosBase.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosBase;
