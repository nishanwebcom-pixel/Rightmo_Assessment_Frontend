import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";
import type { LoginRequest } from "./auth.model";
import { setErrors } from "../validation/validationSlice";
import { showError } from "../../api/services/alerts.service";

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginRequest, { dispatch }) => {
    try {
      const res = await loginApi(data);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);
