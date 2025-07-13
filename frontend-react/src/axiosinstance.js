import axios from 'axios';

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_API || 'http://127.0.0.1:8000/api/v1'

const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
})

//  Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add headers or modify the request here if needed
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;