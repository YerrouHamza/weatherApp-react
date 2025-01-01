import axios from "axios";

const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

api.interceptors.request.use(
    (config) => {
        config.params = {
            key: '8ad0d366eba14f8087e220940241111',
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
