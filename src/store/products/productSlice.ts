import { createSlice } from "@reduxjs/toolkit";
import { showSuccess } from "../../api/services/alerts.service";
import type { ProductState } from "./product.model";
import {
  createProduct,
  deleteProduct,
  getProductFormData,
  listAllProduct,
  showProduct,
  updateProduct,
} from "./productThunks";

const initialState: ProductState = {
  products: null,
  loading: false,
  produtFormLoading: false,
  showProdutLoading: false,
  productFormData: null,
  productDetails: null,
  productDetailsLoading: false,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductFormData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductFormData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.productFormData = payload?.data;
      })
      .addCase(getProductFormData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(listAllProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(listAllProduct.fulfilled, (state, { payload }) => {
        showSuccess(payload?.message);
        state.loading = false;
        state.products = payload;
      })
      .addCase(listAllProduct.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.produtFormLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        showSuccess(payload?.message);
        state.produtFormLoading = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.produtFormLoading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.produtFormLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        showSuccess(payload?.message);
        state.produtFormLoading = false;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.produtFormLoading = false;
      })
      .addCase(showProduct.pending, (state) => {
        state.productDetailsLoading = true;
      })
      .addCase(showProduct.fulfilled, (state, { payload }) => {
        state.productDetailsLoading = false;
        state.productDetails = payload?.data;
      })
      .addCase(showProduct.rejected, (state) => {
        state.productDetailsLoading = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default productSlice.reducer;
