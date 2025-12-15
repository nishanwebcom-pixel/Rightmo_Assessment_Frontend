import { Outlet } from "react-router-dom";
import DashboardFooter from "../admin/DashboardFooter";
import DashboardHeader from "../admin/DashboardHeader";

function AdminLayout() {
  return (
    <>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased selection:bg-primary selection:text-text-main">
        <DashboardHeader />
        <Outlet />
        <DashboardFooter />
      </div>
    </>
  );
}

export default AdminLayout;
