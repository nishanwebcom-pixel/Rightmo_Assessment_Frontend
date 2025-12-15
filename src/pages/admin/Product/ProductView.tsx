import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showProduct } from "../../../store/products/productThunks";
import {
  selectProductDetails,
  selectProductDetailsLoading,
} from "../../../store/products/productSelector";
import RatingInput from "../../../components/RatingInput";
import ProductDetailsLoading from "./ProductDetailsLoading";
import EmptyProductUi from "./EmptyProductUi";
import { formatPrice } from "../../../utils/helper";
import { useAppDispatch } from "../../../store/hooks";

const ProductView = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
   const dispatch = useAppDispatch();
  const productDetails = useSelector(selectProductDetails);
  const isProductDetailsLoading = useSelector(selectProductDetailsLoading);

  useEffect(() => {
    if (productId) {
      dispatch(showProduct(parseInt(productId)));
    }
  }, [productId]);

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
                  View Product
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {isProductDetailsLoading && (
                <div className="pt-6">
                  <div className="space-y-8">
                    <ProductDetailsLoading />
                  </div>
                </div>
              )}

              {productDetails == null && !isProductDetailsLoading && (
                <EmptyProductUi />
              )}
              {!isProductDetailsLoading && productDetails != null && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="mb-4 bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={productDetails?.image}
                        alt={productDetails?.name}
                        className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-blue-900">
                            Images
                          </h3>
                          <p className="text-sm text-blue-700">
                            Uploaded 1 images
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-8">
                      <div className="border-b border-gray-200 pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                          {productDetails?.name}
                        </h1>
                        <div className="mt-2 flex items-center space-x-4">
                          <div className="flex items-center">
                            <span className="ml-2 text-sm text-gray-600">
                              <RatingInput
                                initialValue={productDetails?.rating}
                                readonly={true}
                              />
                              / reviews
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-green-600 font-medium">
                            {productDetails?.status}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-gray-900">
                            {productDetails?.currency?.code}{" "}
                            {formatPrice(productDetails?.price)}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-700 mb-1">
                            Category *
                          </h3>
                          <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-gray-900">
                              {productDetails?.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
