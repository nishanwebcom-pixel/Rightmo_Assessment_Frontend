import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/auth/Login.tsx";
import HomeLayout from "./pages/layouts/HomeLayout.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AdminLayout from "./pages/layouts/AdminLayout.tsx";
import ProductGrid from "./pages/admin/Product/ProductGrid.tsx";
import ProductCreate from "./pages/admin/Product/ProductAction.tsx";
import ProductView from "./pages/admin/Product/ProductView.tsx";
function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="dashboard" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="" element={<ProductGrid />} />         
          <Route path="manage-product" element={<ProductCreate />} />
          <Route path="view-product/:productId" element={<ProductView />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
