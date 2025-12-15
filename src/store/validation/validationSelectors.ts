import type { RootStateModel } from "../store.model";

export const selectErrorsBulk = (state: RootStateModel) =>
  state.validation.errorBulk;
export const selectErrorMessage = (state: RootStateModel) =>
  state.validation.errorMessage;
