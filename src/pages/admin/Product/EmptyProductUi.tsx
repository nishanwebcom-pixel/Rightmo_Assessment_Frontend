import { useNavigate } from "react-router-dom";

const EmptyProductUi = () => {
    const navigation = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 animate-bounce">
        <svg
          className="h-10 w-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A3.75 3.75 0 0012 1.5a3.75 3.75 0 00-3.75 3.75V9M4.5 9h15m-1.5 0l-.75 12a3 3 0 01-3 3H9.75a3 3 0 01-3-3L6 9"
          />
        </svg>
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-700">
        Product details not found
      </h3>
      <p className="mt-2 max-w-sm text-sm text-gray-500">
        We couldn’t find the information you’re looking for.
      </p>
      <br/>
      <div className="flex justify-end">
        <button onClick={()=>{navigation('/dashboard')}} className="px-4 py-2 mr-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Go back
        </button>
      </div>
    </div>
  );
};

export default EmptyProductUi;
