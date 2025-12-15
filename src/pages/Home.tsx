import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

  return (
    <>
      <main className="flex-grow flex flex-col">
        <section className="relative flex flex-col items-center justify-center px-4 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="layout-content-container flex flex-col max-w-[960px] w-full z-10 text-center gap-8">
            <div className="opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e6e6db] dark:bg-surface-dark dark:border-[#444] shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-text-sub dark:text-gray-300 uppercase tracking-wider">
                  Assessment Ready
                </span>
              </div>
              <h1 className="text-text-main dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                Rightmo Product Management
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-300 dark:to-primary">
                  Assessment
                </span>
              </h1>
            </div>
            <div className="opacity-0 animate-fade-in-up-delay-1 max-w-[640px] mx-auto">
              <h2 className="text-text-sub dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed">
                A simple full-stack dashboard built with React and Laravel to
                streamline your product evaluation process.
              </h2>
            </div>
            <div className="opacity-0 animate-fade-in-up-delay-2 flex flex-wrap justify-center gap-4 pt-4">
              <button  onClick={() => {
                navigate("/login");
              }} className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-[#e6e205] text-[#181811] text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-xl shadow-primary/25">
                <span className="truncate">Get Started</span>
              </button>
            </div>
         
          </div>
        </section>
        <section className="py-20 px-4 sm:px-10 bg-white dark:bg-surface-dark border-y border-[#e6e6db] dark:border-[#333]">
          <div className="layout-content-container flex flex-col max-w-6xl mx-auto gap-12">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Key Features
              </h2>
              <p className="text-text-sub dark:text-gray-400 text-base md:text-lg font-normal leading-normal max-w-[720px]">
                Everything you need to assess product management skills
                efficiently, built on a robust modern stack.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark p-6 transition-all hover:shadow-lg hover:border-primary/50 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#3a3920] text-text-main dark:text-primary shadow-sm group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    React Frontend
                  </h3>
                  <p className="text-text-sub dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Built with the latest React app.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark p-6 transition-all hover:shadow-lg hover:border-primary/50 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#3a3920] text-text-main dark:text-primary shadow-sm group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    Laravel Backend
                  </h3>
                  <p className="text-text-sub dark:text-gray-400 text-sm font-normal leading-relaxed">
                    A robust, secure API powered by Laravel PHP framework,
                    handling complex data relationships with ease.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6db] dark:border-[#444] bg-background-light dark:bg-background-dark p-6 transition-all hover:shadow-lg hover:border-primary/50 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-[#3a3920] text-text-main dark:text-primary shadow-sm group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    Modern UI
                  </h3>
                  <p className="text-text-sub dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Styled with Tailwind CSS for a responsive, clean design that
                    adapts perfectly to any device size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
