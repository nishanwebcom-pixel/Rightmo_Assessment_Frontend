import { createSlice } from "@reduxjs/toolkit";
import type { ValidatorState } from "../store.model";

const initialState: ValidatorState = {
  errorBulk: null,
  errorMessage: "",
};
const validationSlice = createSlice({
  name: "validation",
  initialState: initialState,
  reducers: {
    setErrors(state, { payload }) {
      if (typeof payload === "string") {
        state.errorBulk = null;
        state.errorMessage = payload;
      } else if (typeof payload === "object") {
        state.errorBulk = payload;
        state.errorMessage = "";
      } else {
        state.errorBulk = null;
        state.errorMessage = "Unknown errors";
      }
    },
    resetErrors(state) {
      state.errorBulk = null;
      state.errorMessage = "";
    },
  },
});
export const { setErrors, resetErrors } = validationSlice.actions;
export default validationSlice.reducer;
