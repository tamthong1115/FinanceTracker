import React from "react";
import { useForm } from "react-hook-form";
import {
  BudgetFormData,
  BudgetPeriod,
  BUDGET_CATEGORIES,
  budgetValidationSchema,
  getDateRangeForPeriod,
} from "../../../types/budget";

interface BudgetFormProps {
  initialData?: BudgetFormData;
  onSubmit: (data: BudgetFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export const BudgetForm: React.FC<BudgetFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BudgetFormData>({
    defaultValues: initialData || {
      period: "MONTHLY" as BudgetPeriod,
      ...getDateRangeForPeriod("MONTHLY"),
    },
  });

  // Watch period to update date range
  const selectedPeriod = watch("period");

  // Update date range when period changes
  React.useEffect(() => {
    if (!initialData) {
      const { startDate, endDate } = getDateRangeForPeriod(
        selectedPeriod as BudgetPeriod
      );
      setValue("startDate", startDate);
      setValue("endDate", endDate);
    }
  }, [selectedPeriod, initialData, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          {...register("category", budgetValidationSchema.category)}
          className={`w-full rounded-md border ${
            errors.category ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        >
          <option value="">Select category</option>
          {BUDGET_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Limit Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget Limit
        </label>
        <div className="relative">
          <input
            type="number"
            {...register("limit", budgetValidationSchema.limit)}
            className={`w-full pl-8 rounded-md border ${
              errors.limit ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="0"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            ₫
          </span>
        </div>
        {errors.limit && (
          <p className="mt-1 text-xs text-red-500">{errors.limit.message}</p>
        )}
      </div>

      {/* Period */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Period
        </label>
        <select
          {...register("period", budgetValidationSchema.period)}
          className={`w-full rounded-md border ${
            errors.period ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        >
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
          <option value="YEARLY">Yearly</option>
        </select>
        {errors.period && (
          <p className="mt-1 text-xs text-red-500">{errors.period.message}</p>
        )}
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate", budgetValidationSchema.startDate)}
            className={`w-full rounded-md border ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {errors.startDate && (
            <p className="mt-1 text-xs text-red-500">
              {errors.startDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            {...register("endDate", budgetValidationSchema.endDate)}
            className={`w-full rounded-md border ${
              errors.endDate ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {errors.endDate && (
            <p className="mt-1 text-xs text-red-500">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md
                        ${
                          isLoading
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }
                    `}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </div>
          ) : (
            "Save Budget"
          )}
        </button>
      </div>
    </form>
  );
};
