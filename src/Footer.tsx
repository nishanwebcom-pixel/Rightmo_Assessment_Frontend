function Footer() {
  return (
    <>
      <footer className="bg-background-light dark:bg-background-dark py-12 px-4 border-t border-[#e6e6db] dark:border-[#333]">
        <div className="layout-content-container max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center size-10 bg-primary/20 rounded-full text-text-main dark:text-white">
              <span className="material-symbols-outlined">layers</span>
            </div>           
          </div>
          <p className="text-text-sub dark:text-gray-500 text-sm font-normal">
            © 2023 Rightmo Assessment. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
