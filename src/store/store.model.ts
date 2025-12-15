import type { AuthState } from "./auth/auth.model";
import type { ProductState } from "./products/product.model";

export interface RootStateModel {
  adminAuth: AuthState;
  validation: ValidatorState;
  productState: ProductState;
}

export interface ValidatorState {
  errorBulk: any;
  errorMessage: string;
}
