import { apiClient } from "../../api/client";
import type { LoginRequest } from "./auth.model";

export const loginApi = (data: LoginRequest) => {
  return apiClient.post("api/login", data);
};
