import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginType } from "../../../types/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../config/AuthContext";
import axiosInstance from "../../../config/axiosConfig";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const BASE_URL = "/api/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit = async (data: LoginType) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(`${BASE_URL}/login`, data);
      toast.success("Login successful!");
      login(response.data.token, response.data.user);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 p-4 h-full max-w-7xl mx-auto">
        <div className="hidden md:block max-md:order-1 lg:col-span-2 w-full bg-[#000842] md:rounded-2xl lg:p-12 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto filter drop-shadow-xl"
            alt="login-image"
          />
        </div>

        <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Sign in
              </h3>
              <p className="text-sm mt-4 text-gray-800">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-6">
              <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
              Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3.5 px-6 rounded-lg text-white font-medium
                ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                }
                transform transition-all duration-200 ease-in-out
                hover:shadow-lg active:scale-98
                flex items-center justify-center space-x-2
              `}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign in</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
