import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterType } from "../../../types/auth.ts";
import axiosInstance from "../../../config/axiosConfig.ts";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "../../../components/common/LoadingSpinner.tsx";
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const BASE_URL = "/api/auth";

const RegisterForm: FC = () => {
  useDocumentTitle('Register');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterType) => {
    try {
      setIsLoading(true);

      // First show loading toast
      const loadingToastId = toast.loading("Creating your account...", {
        position: "top-right",
      });

      await axiosInstance.post(`${BASE_URL}/register`, data);

      // Update loading toast to success
      toast.update(loadingToastId, {
        render: "Registration successful! Please log in.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      // Small delay before redirect
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/login");
    } catch (error: unknown) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-8 p-4 h-full max-w-7xl mx-auto">
        <div className="hidden md:block max-md:order-1 lg:col-span-2 w-full bg-[#000842] md:rounded-2xl lg:p-12 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="header/sign-in.png"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto filter drop-shadow-xl"
            alt="register-image"
          />
        </div>

        <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Register
              </h3>
              <p className="text-sm mt-4 text-gray-800">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Username
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                  className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter username"
                />
                {errors.username && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
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
                    className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
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

              <div>
                <label className="text-gray-700 font-medium text-sm mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                    className="w-full text-sm text-gray-800 bg-gray-50 px-4 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
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
                  <span>Creating account...</span>
                </>
              ) : (
                <span>Create account</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
