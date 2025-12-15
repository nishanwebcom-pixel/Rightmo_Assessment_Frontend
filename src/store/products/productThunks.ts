import { createAsyncThunk } from "@reduxjs/toolkit";
import { setErrors } from "../validation/validationSlice";
import { showError } from "../../api/services/alerts.service";
import type {
  CreateProductRequest,
  GetAllProductRequest,
  UpdateProductRequest,
} from "./product.model";
import {
  createProductApi,
  deleteProductApi,
  getProductFormDataApi,
  listAllProductApi,
  showProductApi,
  updateProductApi,
} from "./productApi";

export const getProductFormData = createAsyncThunk(
  "product/formData",
  async () => {
    try {
      const res = await getProductFormDataApi();
      return res.data;
    } catch (error: any) {
      showError(error?.responseData.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/create",
  async (data: CreateProductRequest, { dispatch }) => {
    try {
      const res = await createProductApi(data);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (params: { id: number; data: UpdateProductRequest }, { dispatch }) => {
    try {
      const res = await updateProductApi(params.id, params.data);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);

export const showProduct = createAsyncThunk(
  "product/show",
  async (id: number, { dispatch }) => {
    try {
      const res = await showProductApi(id);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: number, { dispatch }) => {
    try {
      const res = await deleteProductApi(id);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);

export const listAllProduct = createAsyncThunk(
  "product/list-all",
  async (filters: GetAllProductRequest, { dispatch }) => {
    try {
      const res = await listAllProductApi(filters);
      return res.data;
    } catch (error: any) {
      dispatch(setErrors(error.response.data?.message));
      showError(error?.responseData.message);
    }
  }
);
