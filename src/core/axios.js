import axios from "axios";

const instance = axios.create({
  baseURL: "https://sms-api.makereal.click/api",
});

instance.interceptors.request.use(
  function (config) {
    const authToken = localStorage.getItem("jwtToken");

    if (authToken) {
      config = {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${authToken}`,
        },
      };
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("jwtToken");

        return Promise.reject(new Error("You are not authorize."));
      }
    }

    return Promise.reject(error);
  }
);

export const Axios = instance;
