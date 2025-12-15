function DashboardFooter() {
  return (
    <footer className="border-t border-[#e6e6db] dark:border-[#333] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-text-sub dark:text-gray-500">
          © 2023 Rightmo Product Dashboard. Assessment for Senior Software
          Engineer.
        </p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <span className="text-xs text-text-sub dark:text-gray-500">
            Simulated API Data
          </span>
          <span className="text-xs text-green-500 flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            System Online
          </span>
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
