import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#e6e6db] dark:border-[#444] glass-nav transition-all duration-300">
        <div className="layout-container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-10">
          <div className="flex items-center gap-3 text-text-main dark:text-white">
            <div className="flex items-center justify-center size-8 bg-primary rounded-full text-text-main">
              <span className="material-symbols-outlined text-[20px] font-bold">
                layers
              </span>
            </div>
            <h2
              onClick={() => {
                navigate("/");
              }}
              className="text-lg font-bold cursor-pointer leading-tight tracking-[-0.015em]"
            >
              Rightmo Assessment
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-5 bg-primary hover:bg-[#e6e205] text-text-main text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
