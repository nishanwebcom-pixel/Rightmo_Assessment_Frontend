import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../../store/auth/authThunks";
import Error from "../../components/Error";
import { selectAdminAuthLoading, selectAdminToken } from "../../store/auth/authSelector";
import SimpleLoader from "../../components/SimpleLoader";
import { resetErrors } from "../../store/validation/validationSlice";
import { useAppDispatch } from "../../store/hooks";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useSelector(selectAdminToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector(selectAdminAuthLoading);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    dispatch(resetErrors());
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <>
      <main className="flex-grow flex items-center justify-center py-10 md:py-16 px-4">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="w-full max-w-[440px] z-10 opacity-0 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e6e6db] dark:bg-surface-dark dark:border-[#444] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              <span className="text-xs font-semibold text-text-sub dark:text-gray-300 uppercase tracking-wider">
                Welcome Back
              </span>
            </div>
            <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">
              Sign In to Your Account
            </h1>
            <p className="text-text-sub dark:text-gray-400 text-base font-normal leading-relaxed">
              Access product management assessment dashboard.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e6e6db] dark:border-[#444] p-6 md:p-8 shadow-lg">
            <form id="login-form" className="space-y-6" onSubmit={handleLogin}>
              <Error />
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text-main dark:text-white">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-text-sub dark:text-gray-500 text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#e6e6db] dark:border-[#444] bg-white dark:bg-background-dark text-text-main dark:text-white form-input focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-text-main dark:text-white">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-text-sub dark:text-gray-500 text-lg">
                    lock
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full h-12 pl-12 pr-12 rounded-xl border border-[#e6e6db] dark:border-[#444] bg-white dark:bg-background-dark text-text-main dark:text-white form-input focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    id="toggle-password"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-sub dark:text-gray-500"
                  >
                    {showPassword && (
                      <span className="material-symbols-outlined">
                        visibility_off
                      </span>
                    )}
                    {!showPassword && (
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                id="login-button"
                className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#e6e205] text-text-main text-base font-bold leading-normal tracking-[0.015em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                {!loading && <span id="button-text">Sign In</span>}
                {loading && <SimpleLoader />}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-text-sub dark:text-gray-500 text-sm">
              <span className="material-symbols-outlined text-base">
                shield
              </span>
              <span>Your data is securely encrypted and protected.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
