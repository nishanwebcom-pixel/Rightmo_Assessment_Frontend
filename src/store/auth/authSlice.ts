import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./auth.model";
import { showSuccess } from "../../api/services/alerts.service";
import {
  getLocalStorageValues,
  setLocalStorageValues,
} from "../../utils/helper";
import { login } from "./authThunks";

const initialState: AuthState = {
  user: getLocalStorageValues("adminuser"),
  token: localStorage.getItem("token") || null,
  loading: false,
};
const adminAuthSlice = createSlice({
  name: "adminAuthStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        showSuccess(payload?.message);
        state.loading = false;
        setLocalStorageValues(payload?.data?.user, "adminuser");
        state.user = payload?.data?.user?.user || null;
        localStorage.setItem("token", payload?.data?.token);
        state.token = payload?.data?.token || null;
      })
      .addCase(login.rejected, (state) => {
        localStorage.clear();
        state.loading = false;
        state.token = null;
        state.user = null;
      });
  },
});
export default adminAuthSlice.reducer;
