function DashboardHeader() {
  
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <header className="sticky bg-background-light top-0 z-50 w-full border-b border-[#e6e6db] dark:border-[#333] glass-nav transition-all duration-300">
      <div className="layout-container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 text-text-main dark:text-white">
          <div className="flex items-center justify-center size-8 bg-primary rounded-full text-text-main">
            <span className="material-symbols-outlined text-[20px] font-bold">
              layers
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight">
              Product Dashboard
            </h2>
            <p className="text-xs text-text-sub dark:text-gray-400">
              Rightmo Assessment
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-r from-primary to-yellow-500 flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-text-sub dark:text-gray-400">Admin</p>
            </div>
          </div>
          <button onClick={logout} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
