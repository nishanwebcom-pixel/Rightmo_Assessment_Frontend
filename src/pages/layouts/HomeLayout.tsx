import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

function HomeLayout() {
  return (
    <>
      <div className="bg-background font-display text-text-main dark:text-white antialiased selection:bg-primary selection:text-text-main">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-hidden">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
