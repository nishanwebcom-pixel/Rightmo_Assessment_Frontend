import type { RootStateModel } from "../store.model";

export const selectAdminUser = (state: RootStateModel) => state.adminAuth.user;
export const selectAdminToken = (state: RootStateModel) =>
  state.adminAuth.token;
export const selectAdminAuthLoading = (state: RootStateModel) =>
  state.adminAuth.loading;
