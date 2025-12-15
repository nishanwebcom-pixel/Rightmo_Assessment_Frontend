import { useSelector } from "react-redux";
import {
  selectIsGridLoading,
  selectProductFormData,
  selectProductList,
} from "../../../store/products/productSelector";
import {
  getProductFormData,
  listAllProduct,
} from "../../../store/products/productThunks";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductDetailsLoading from "./ProductDetailsLoading";
import EmptyProductList from "./EmptyProductList";
import { useAppDispatch } from "../../../store/hooks";

function ProductGrid() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const productFormData = useSelector(selectProductFormData);
  const [filter, setFilter] = useState({
    page: 1,
    perPage: 9,
    search: "",
    sortby: "",
    rating: 0,
    sortOrder: "",
    category: "",
  });
  const [debounceFilter] = useDebounce(filter, 1000);

  const getAllProducts = () => {
    dispatch(listAllProduct(filter));
  };

  useEffect(() => {
    getAllProducts();
  }, [debounceFilter]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const productList = useSelector(selectProductList);
  const isLoading = useSelector(selectIsGridLoading);

  useEffect(() => {
    dispatch(getProductFormData());
  }, []);

  const paginate = (page: any) => {
    if (productList) {
      if (page > 0 && page <= productList.last_page) {
        setFilter({
          ...filter,
          page: page,
        });
      }
    }
  };

  return (
    <>
      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-2">
                  Product Management
                </h1>
              </div>
              <button
                onClick={() => {
                  navigation("/dashboard/manage-product");
                }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-[#e6e205] text-text-main font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined">add</span>
                <span>Add Product</span>
              </button>
            </div>
          </div>

          <form className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e6e6db] dark:border-[#444] p-4 sm:p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-text-sub dark:text-gray-500">
                    search
                  </span>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    onChange={handleChange}
                    placeholder="Search by product name..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
                  Filter by Category
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">All Categories</option>
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
                <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
                  Sort by:
                </label>
                <select
                  id="sortby"
                  name="sortby"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">None</option>
                  <option value="price_asc">Price (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                  <option value="rating_asc">Rating (Low to High)</option>
                  <option value="rating_desc">Rating (High to Low)</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-[#e6e6db] dark:border-[#444]">
              {/* Results Count */}
              <div className="text-sm text-text-sub dark:text-gray-400">
                Showing <span>{productList?.to} </span> of
                <span> {productList?.total}</span> products
              </div>
            </div>
          </form>
          <div className="mb-8">
            {isLoading && (
              <div className="pt-6">
                <div className="space-y-8">
                  <ProductDetailsLoading />
                </div>
              </div>
            )}
            {!isLoading && productList?.data?.length == 0 && (
              <div className="pt-6">
                <div className="space-y-8">
                  <EmptyProductList />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList?.data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  getAllProducts={getAllProducts}
                />
              ))}
            </div>
          </div>

          {productList && (
            <div className="flex items-center justify-between border-t border-[#e6e6db] dark:border-[#333] pt-6">
              <button
                onClick={() => {
                  paginate(productList?.current_page - 1);
                }}
                disabled={filter.page == 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e6e6db] dark:border-[#444] hover:bg-black/5 dark:hover:bg-white/10"
              >
                <span className="material-symbols-outlined">chevron_left</span>
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-text-sub dark:text-gray-400">
                  Page
                </span>
                <span className="font-medium">{productList?.to}</span>
                <span className="text-sm text-text-sub dark:text-gray-400">
                  of
                </span>
                <span className="font-medium">{productList?.total}</span>
              </div>

              <button
                onClick={() => {
                  paginate(productList?.current_page + 1);
                }}
                disabled={productList?.last_page === filter.page}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e6e6db] dark:border-[#444] hover:bg-black/5 dark:hover:bg-white/10"
              >
                <span>Next</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default ProductGrid;
