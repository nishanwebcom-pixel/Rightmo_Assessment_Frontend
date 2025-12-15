import { useSelector } from "react-redux";
import { selectErrorMessage, selectErrorsBulk } from "../store/validation/validationSelectors";

function Error() {
  const errorsBulk = useSelector(selectErrorsBulk);
  const error = useSelector(selectErrorMessage);
  return (
    <>
      {errorsBulk!==null && (
        <div className="w-full rounded-sm border border-red-300 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 4h.01M10.29 3.86c.58-1.15 2.12-1.15 2.7 0l8.48 16.86A1.5 1.5 0 0 1 20.08 23H3.92a1.5 1.5 0 0 1-1.39-2.28L10.29 3.86z"
              />
            </svg>
            <span className="font-semibold text-red-700">
              Please fix the following errors
            </span>
          </div>
          {Object.keys(errorsBulk)?.map((field) => (
            <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
              <li>
                {field} : {errorsBulk[field]}
              </li>
            </ul>
          ))}
        </div>
      )}
      {error && (
        <div className="w-full max-w-xl rounded-lg border border-red-300 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-red-600"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 4h.01M10.29 3.86c.58-1.15 2.12-1.15 2.7 0l8.48 16.86A1.5 1.5 0 0 1 20.08 23H3.92a1.5 1.5 0 0 1-1.39-2.28L10.29 3.86z"
              />
            </svg>
            <span className="font-semibold text-red-700">
              Please fix the following errors
            </span>
          </div>
          <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
            <li>{error}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Error;
