import type { RootStateModel } from "../store.model";

export const selectProductList = (state: RootStateModel) =>
  state.productState.products;
export const selectProductFormData = (state: RootStateModel) =>
  state.productState.productFormData;
export const selectIsGridLoading = (state: RootStateModel) =>
  state.productState.loading;
export const selectProductFormLoading = (state: RootStateModel) =>
  state.productState.produtFormLoading;
export const selectShowProductLoading = (state: RootStateModel) =>
  state.productState.showProdutLoading;
export const selectProductDetails = (state: RootStateModel) =>
  state.productState.productDetails;
export const selectProductDetailsLoading = (state: RootStateModel) =>
  state.productState.productDetailsLoading;
