import { apiClient } from "../../api/client";
import type {
  CreateProductRequest,
  GetAllProductRequest,
  UpdateProductRequest,
} from "./product.model";

export const getProductFormDataApi = () => {
  return apiClient.get("api/products?formdata=true");
};

export const createProductApi = (data: CreateProductRequest) => {
  return apiClient.post("api/products", data);
};

export const updateProductApi = (id: number, data: UpdateProductRequest) => {
  return apiClient.put(`api/products/${id}`, data);
};

export const showProductApi = (id: number) => {
  return apiClient.get(`api/products/${id}`);
};

export const deleteProductApi = (id: number) => {
  return apiClient.delete(`api/products/${id}`);
};

export const listAllProductApi = (filters: GetAllProductRequest) => {
  return apiClient.get(`api/products`, { params: filters });
};
