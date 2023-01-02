import { AuthResponse } from "@feature/auth/login";
import { ACCESS_TOKEN, API_URL } from "@shared/constants";
import axios from "axios";


const API = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem(
    ACCESS_TOKEN
  )}`;
  return config;
});

API.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}/auth/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
        return API.request(originalRequest);
      } catch (e) {
        console.log("client: unauthorized");
      }
    }
    throw error;
  }
);

export { API };
