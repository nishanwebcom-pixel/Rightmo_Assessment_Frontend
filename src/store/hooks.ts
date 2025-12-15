// app/hooks.ts

import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store"; // Import the type from Step 1

export const useAppDispatch: () => AppDispatch = useDispatch;
