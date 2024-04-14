import axios from "axios";

export const defaultInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"]; // FormData를 사용하는 경우 Content-Type 헤더 제거
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
