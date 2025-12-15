import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import { showError } from "./services/alerts.service";

const BASE_URL = import.meta.env.VITE_API_URL;
class ApiClient {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalError = error;
        if (error.response?.status === 401) {
          if (error.response?.data?.data != "SKIP_REDIRECTION") {
            showError("Unautherized");
            localStorage.clear();
            window.location.href = "/login";
          }
        }
        return Promise.reject({
          ...originalError,
          responseData: error.response?.data,
          status: error.response?.status,
          statusText: error.response?.statusText,
          headers: error.response?.headers,
        });
      }
    );
  }
  public getClient(): AxiosInstance {
    return this.client;
  }
}
export const apiClient = new ApiClient().getClient();
