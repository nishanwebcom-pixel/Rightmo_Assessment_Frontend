import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from "./auth/authSlice";
import validationSlice from "./validation/validationSlice";
import productSlice from "./products/productSlice";
export const store = configureStore({
  reducer: {
    adminAuth: adminAuthSlice,
    validation: validationSlice,
    productState: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
