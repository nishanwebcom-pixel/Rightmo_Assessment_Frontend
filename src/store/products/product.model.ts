import type { Currency } from "../currency.model";

export interface CreateProductRequest {
  name: string;
  category: string;
  currency_id: number;
  price: number;
  rating: number;
  image: string;
  status: string;
}

export interface ProductState {
  products: ProductPaginate | null;
  loading: boolean;
  produtFormLoading: boolean;
  showProdutLoading: boolean;
  productFormData: ProductFormData | null;
  productDetails: Product | null;
  productDetailsLoading: boolean;
}

export interface ProductFormData {
  currency: Currency[];
  categories: string[];
}

export interface UpdateProductRequest {
  name: string;
  category: string;
  currency_id: number;
  price: number;
  rating: number;
  image: string;
  status: string;
}

export interface Product {
  id?: number;
  name: string;
  category: string;
  currency_id: number;
  price: number;
  rating: number;
  image: string;
  status: string;
  currency?: Currency;
}

export interface ProductPaginate {
  current_page: number;
  data: Product[];
  total: number;
  per_page: number;
  last_page: number;
  to: number;
}

export interface GetAllProductRequest {
  page: number;
  perPage: number;
  search: string;
  sortby: string;
  category: string;
}
