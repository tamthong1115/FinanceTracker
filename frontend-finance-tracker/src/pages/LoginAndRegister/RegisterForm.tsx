import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterType } from "../../types/auth";
import axiosInstance from "../../config/axiosConfig.ts";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";

const BASE_URL = "/api/auth";

const RegisterForm: FC = () => {
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
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
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
    <div className="font-[sans-serif] min-h-screen">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
        <div className="max-md:order-1 lg:col-span-2 md:h-90% w-full bg-[#000842] md:rounded-xl md:rounded-br-xl lg:p-12 p-8">
          <img
            src="header/sign-in.png"
            className="lg:w-[70%] w-full h-full object-contain block mx-auto"
            alt="register-image"
          />
        </div>

        <div className="w-full p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
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

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
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
                className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 ${
                  errors.username ? "border-red-500" : ""
                }`}
                placeholder="Enter username"
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
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
                className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 ${
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

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
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
                  className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 ${
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

            <div>
              <label className="text-gray-800 text-[15px] mb-2 block">
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
                  className={`w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
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

            <button
              type="submit"
              disabled={isLoading}
              className={`
        w-full py-3 px-6 rounded-md text-white
        ${
          isLoading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }
        transition duration-200
        flex items-center justify-center
        space-x-2
        relative
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

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-all"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="google"
              />
              <span>Continue with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
