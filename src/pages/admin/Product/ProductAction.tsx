import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectProductDetails,
  selectProductDetailsLoading,
  selectProductFormData,
  selectProductFormLoading,
} from "../../../store/products/productSelector";
import {
  createProduct,
  getProductFormData,
  showProduct,
  updateProduct,
} from "../../../store/products/productThunks";
import { showError } from "../../../api/services/alerts.service";
import SimpleLoader from "../../../components/SimpleLoader";
import Error from "../../../components/Error";
import ProductDetailsLoading from "./ProductDetailsLoading";
import EmptyProductUi from "./EmptyProductUi";
import { resetErrors } from "../../../store/validation/validationSlice";
import { RatingInput } from "../../../components/RatingInput";
import { useAppDispatch } from "../../../store/hooks";
import type { Product } from "../../../store/products/product.model";

const ProductCreate: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useSelector(selectProductFormLoading);
  const [isEditProduct, setIsEditProduct] = useState<boolean>(false);
  const isProductDetailsLoading = useSelector(selectProductDetailsLoading);
  const productDetails = useSelector(selectProductDetails);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("product");
  const [productImage, setProductImage] = useState<any>("");

  const productFormData = useSelector(selectProductFormData);

  const [formData, setFormData] = useState<Product>({
    name: "",
    category: "",
    currency_id: 0,
    price: 0,
    rating: 0,
    image: "",
    status: "",
  });

  useEffect(() => {
    if (!productFormData) {
      dispatch(getProductFormData());
    }
  }, [productFormData]);

  useEffect(() => {
    if (id) {
      dispatch(showProduct(parseInt(id)));
      setIsEditProduct(true);
    }
  }, [id]);

  useEffect(() => {
    if (productDetails && isEditProduct) {
      setFormData({
        name: productDetails?.name || "",
        category: productDetails?.category || "",
        currency_id: productDetails?.currency_id,
        price: productDetails?.price || 0,
        rating: productDetails?.rating || 0,
        image: productDetails?.image || "",
        status: productDetails?.status || "",
      });
    }
  }, [productDetails]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
      });
      setProductImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEditProduct && !productImage) {
      showError("Product image is required ");
      return;
    }
    if (!formData.category) {
      showError("Category field is required");
      return;
    }

    if (!formData.currency_id) {
      showError("Currency field is required");
      return;
    }
    if (!formData.name) {
      showError("Name field is required");
      return;
    }

    if (!formData.price) {
      showError("Price field is required");
      return;
    }
    const productData = {
      ...formData,
      image: productImage,
    };
    try {
      if (isEditProduct) {
        if (id != null) {
          dispatch(
            updateProduct({
              id: parseInt(id),
              data: productData,
            })
          );
        } else {
          showError("Invalid id details");
        }
      } else {
        dispatch(createProduct(productData))
          .unwrap()
          .then((data) => {
            if (data?.success) {
              setFormData({
                name: "",
                category: "",
                currency_id: 0,
                price: 0,
                rating: 0,
                image: "",
                status: "",
              });
              setProductImage(null);
            }
          });
      }
      dispatch(resetErrors());
    } catch (err) {
      console.error("Failed to create product:", err);
    }
  };

  const onUpdateRating = (rate: number) => {
    setFormData({
      ...formData,
      rating: rate,
    });
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {isEditProduct ? "Update New Product" : " Create New Product"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center">
            {isEditProduct && isProductDetailsLoading && (
              <div className="pt-6">
                <div className="space-y-8">
                  <ProductDetailsLoading />
                </div>
              </div>
            )}
            {productDetails == null &&
              isEditProduct &&
              !isProductDetailsLoading && <EmptyProductUi />}
            {(!isEditProduct ||
              (productDetails != null && !isProductDetailsLoading)) && (
              <form
                id="productForm"
                onSubmit={handleSubmit}
                className="w-full max-w-4xl"
              >
                <div className="pt-6">
                  <div className="space-y-8">
                    <div className="bg-white shadow rounded-lg">
                      <div>
                        <Error />
                      </div>
                      <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">
                          Basic Information
                        </h2>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Product Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter product name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Category *
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleChange}
                              required
                              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Select category</option>
                              {productFormData?.categories &&
                                productFormData?.categories?.length > 0 &&
                                productFormData?.categories.map((c) => (
                                  <option value={c} key={c}>
                                    {c}
                                  </option>
                                ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Currency *
                            </label>
                            <select
                              name="currency_id"
                              value={formData.currency_id}
                              onChange={handleChange}
                              required
                              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Select Currency</option>
                              {productFormData?.currency &&
                                productFormData?.currency?.length > 0 &&
                                productFormData?.currency.map((c) => (
                                  <option value={c.id} key={c.id}>
                                    {c.code}
                                  </option>
                                ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Price *
                            </label>
                            <div className="relative mt-1">
                              <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.01"
                                className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="0.00"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Rating *
                            </label>
                            <RatingInput
                              initialValue={formData.rating}
                              onUpdateRating={onUpdateRating}
                            />
                          </div>
                        </div>
                        <div className="bg-white shadow rounded-lg m-6">
                          <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-medium text-gray-900">
                              Images
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                              Upload up to 5 images
                            </p>
                          </div>
                          <div className="p-12">
                            <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 border-dashed rounded-lg">
                              <div className="mt-4 text-center">
                                <label
                                  htmlFor="image-upload"
                                  className="cursor-pointer"
                                >
                                  <span className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                                    Click to upload
                                  </span>
                                  <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                  />
                                </label>
                                <p className="mt-2 text-xs text-gray-500">
                                  PNG, JPG, GIF up to 5MB each
                                </p>
                              </div>
                            </div>

                            {(isEditProduct && productDetails?.image || productImage) && (
                              <div className="mt-6  min-h-50">
                                <h3 className="text-sm font-medium text-gray-700">
                                  Uploaded Images
                                </h3>
                                <div className="grid gap-4 mt-3">
                                  <img
                                    src={productImage || productDetails?.image}
                                    alt="Image"
                                    className="object-cover w-full h-100 rounded-lg"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            disabled={loading}
                            onClick={handleCancel}
                            className="px-4 py-2 mr-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            style={{
                              minWidth: "150px",
                              textAlign: "-webkit-center",
                            }}
                            form="productForm"
                            disabled={loading}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {loading && <SimpleLoader />}
                            {!loading &&
                              (isEditProduct
                                ? "Update Product"
                                : "Create Product")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
