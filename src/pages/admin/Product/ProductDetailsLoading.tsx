const ProductDetailsLoading = ({ message = "Loading, please wait..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Spinner */}
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>

      {/* Message */}
      <p className="mt-4 text-sm text-gray-500 animate-pulse">{message}</p>
    </div>
  );
};

export default ProductDetailsLoading;
