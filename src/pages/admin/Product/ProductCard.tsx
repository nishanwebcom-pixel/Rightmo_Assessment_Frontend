import { useNavigate } from "react-router-dom";
import RatingInput from "../../../components/RatingInput";
import type { Product } from "../../../store/products/product.model";
import Swal from "sweetalert2";
import { deleteProduct } from "../../../store/products/productThunks";
import { useSelector } from "react-redux";
import { selectIsGridLoading } from "../../../store/products/productSelector";
import { formatPrice } from "../../../utils/helper";
import { useAppDispatch } from "../../../store/hooks";

type props = {
  product: Product;
  getAllProducts: any;
};
function ProductCard(props: props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const isLoading = useSelector(selectIsGridLoading);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (props?.product?.id) {
          dispatch(deleteProduct(props?.product?.id))
            .unwrap()
            .then(() => {
              props.getAllProducts();
            });
        }
      }
    });
  };

  return (
    <div className="product-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e6e6db] dark:border-[#444] p-6 flex flex-col">
      <div className="flex-1">
        <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
          <img
            src={props?.product?.image}
            alt="Wireless Bluetooth Headphones"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-text-main dark:text-white truncate">
              {props?.product?.name}
            </h3>
          </div>
          <p className="text-text-sub dark:text-gray-400 text-sm mb-3 line-clamp-2">
            Category : {props?.product?.category}
          </p>
          <div className="flex items-center gap-2 mb-3">
            <div className="star-rating flex">
              <RatingInput
                initialValue={props?.product?.rating}
                readonly={true}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-text-main dark:text-white">
                {props?.product?.currency?.code ? props?.product?.currency?.code : ""}
                {formatPrice(props?.product?.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => {
            navigation(`/dashboard/view-product/${props?.product?.id}`);
          }}
          className="p-2 pl-3 pr-3 flex-1 h-10 rounded-lg border border-gray-300 dark:border-gray-600
                   text-sm font-medium
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   transition-colors disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "View Details"}
        </button>
        <button
          onClick={() => {
            navigation(
              `/dashboard/manage-product?product=${props?.product?.id}`
            );
          }}
          className="w-10 h-10 flex items-center justify-center
                   rounded-lg border border-gray-300 dark:border-gray-600
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   transition-colors"
        >
          <span className="material-symbols-outlined text-[16px] leading-none">
            edit
          </span>
        </button>
        <button
          onClick={handleDelete}
          className="w-10 h-10 flex items-center justify-center
                   rounded-lg border border-red-300 dark:border-red-900/40
                   hover:bg-red-50 dark:hover:bg-red-900/20
                   transition-colors"
        >
          <span className="material-symbols-outlined text-[16px] leading-none text-red-500">
            delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
