import React from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import {
  Transaction,
  TransactionFormData,
  TransactionType,
} from "../../../types/transaction";
import { CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface TransactionFormProps {
  initialData?: Partial<Transaction>;
  onSubmit: (data: Omit<Transaction, "id">) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const PAYMENT_METHODS = [
  { value: "Cash", label: "Tiền mặt" },
  { value: "Credit Card", label: "Thẻ tín dụng" },
  { value: "Debit Card", label: "Thẻ ghi nợ" },
  { value: "Bank Transfer", label: "Chuyển khoản" },
  { value: "E-Wallet", label: "Ví điện tử" },
  { value: "Other", label: "Khác" },
] as const;

const CATEGORIES = [
  { value: "Food & Dining", label: "Ăn uống" },
  { value: "Shopping", label: "Mua sắm" },
  { value: "Housing", label: "Nhà ở" },
  { value: "Transportation", label: "Di chuyển" },
  { value: "Utilities", label: "Hóa đơn & Tiện ích" },
  { value: "Healthcare", label: "Sức khỏe" },
  { value: "Entertainment", label: "Giải trí" },
  { value: "Education", label: "Giáo dục" },
  { value: "Income", label: "Thu nhập" },
  { value: "Other", label: "Khác" },
] as const;

const STATUS_OPTIONS = [
  { value: "COMPLETED", label: "Đã hoàn thành" },
  { value: "PENDING", label: "Chờ xử lý" },
  { value: "CANCELLED", label: "Đã hủy" },
] as const;

// Reusable form field component
const FormField = ({ label, error, children }: FormFieldProps) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {children}
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

const TransactionForm: React.FC<TransactionFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TransactionFormData>({
    defaultValues: {
      type: (initialData?.type as TransactionType) || "EXPENSE",
      date: initialData?.date
        ? format(new Date(initialData.date), "yyyy-MM-dd")
        : format(new Date(), "yyyy-MM-dd"),
      time: initialData?.date
        ? format(new Date(initialData.date), "HH:mm")
        : format(new Date(), "HH:mm"),
      amount: initialData?.amount || undefined,
      description: initialData?.description || "",
      category: initialData?.category || "",
      paymentMethod: initialData?.paymentMethod || "",
      notes: initialData?.notes || "",
      status: initialData?.status || "COMPLETED",
    },
    mode: "onChange", // Enable real-time validation
  });

  const transactionType = watch("type");

  // Prevent form submission while loading
  const handleFormSubmit = async (data: TransactionFormData) => {
    if (isLoading || isSubmitting) return;

    try {
      const combinedDate = new Date(`${data.date}T${data.time}`);

      if (isNaN(combinedDate.getTime())) {
        throw new Error("Ngày hoặc thời gian không hợp lệ");
      }

      await onSubmit({
        ...data,
        date: combinedDate.toISOString(),
        amount: Number(data.amount),
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Replace the amount input field with this enhanced version
  const AmountField = () => (
    <FormField label="Số tiền" error={errors.amount?.message}>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          ₫
        </span>
        <NumericFormat
          thousandSeparator={true}
          valueIsNumericString={true}
          allowNegative={false}
          decimalScale={0}
          placeholder="0"
          onValueChange={(values) => {
            setValue("amount", values.floatValue || 0);
          }}
          defaultValue={initialData?.amount}
          className={`
            pl-8 w-full rounded-lg border h-11
            ${errors.amount ? "border-red-300" : "border-gray-300"}
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-50 disabled:text-gray-500
          `}
          disabled={isLoading}
        />
      </div>
    </FormField>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header - Static */}
      <div className="flex-none px-4 py-3 sm:p-6 border-b bg-white">
        <h3 className="text-lg font-semibold">
          {initialData ? "Chỉnh sửa giao dịch" : "Thêm giao dịch mới"}
        </h3>
      </div>

      {/* Form Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <form
          id="transaction-form"
          onSubmit={handleSubmit(handleFormSubmit)}
          className="p-4 sm:p-6 space-y-5"
          autoComplete="off"
        >
          {/* Transaction Type */}
          <FormField label="Loại giao dịch">
            <div className="grid grid-cols-2 gap-3">
              {["INCOME", "EXPENSE"].map((type) => (
                <label
                  key={type}
                  className={`
                      flex items-center justify-center p-4 sm:p-3 rounded-lg cursor-pointer
                      border-2 transition-all duration-200 touch-manipulation
                      ${
                        transactionType === type
                          ? type === "INCOME"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                >
                  <input
                    type="radio"
                    {...register("type")}
                    value={type}
                    className="sr-only"
                  />
                  <span className="font-medium">
                    {type === "INCOME" ? "Thu nhập" : "Chi tiêu"}
                  </span>
                </label>
              ))}
            </div>
          </FormField>

          {/* Amount Field */}
          <AmountField />

          {/* Description */}
          <FormField label="Mô tả" error={errors.description?.message}>
            <input
              type="text"
              {...register("description", {
                required: "Vui lòng nhập mô tả",
                maxLength: {
                  value: 100,
                  message: "Mô tả không được quá 100 ký tự",
                },
              })}
              disabled={isLoading}
              className={`w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm ${
                errors.description ? "border-red-300" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500`}
            />
          </FormField>

          {/* Category and Payment Method - 2 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FormField label="Danh mục" error={errors.category?.message}>
              <select
                {...register("category", {
                  required: "Vui lòng chọn danh mục",
                })}
                disabled={isLoading}
                className={`
                    w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm
                    ${errors.category ? "border-red-300" : "border-gray-300"}
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-50 disabled:text-gray-500
                  `}
              >
                <option value="">Chọn danh mục</option>
                {CATEGORIES.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField
              label="Phương thức thanh toán"
              error={errors.paymentMethod?.message}
            >
              <select
                {...register("paymentMethod", {
                  required: "Vui lòng chọn phương thức thanh toán",
                })}
                disabled={isLoading}
                className={`
                    w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm
                    ${
                      errors.paymentMethod ? "border-red-300" : "border-gray-300"
                    }
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-50 disabled:text-gray-500
                  `}
              >
                <option value="">Chọn phương thức</option>
                {PAYMENT_METHODS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Date Time Fields - 2 columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <FormField label="Ngày" error={errors.date?.message}>
              <input
                type="date"
                {...register("date", {
                  required: "Vui lòng chọn ngày",
                  validate: (value) => {
                    const date = new Date(value);
                    if (isNaN(date.getTime())) return "Ngày không hợp lệ";
                    if (date > new Date())
                      return "Ngày không thể trong tương lai";
                    return true;
                  },
                })}
                max={format(new Date(), "yyyy-MM-dd")}
                disabled={isLoading}
                className={`
                    w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm
                    ${errors.date ? "border-red-300" : "border-gray-300"}
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-50 disabled:text-gray-500
                  `}
              />
            </FormField>

            <FormField label="Thời gian" error={errors.time?.message}>
              <input
                type="time"
                {...register("time", {
                  required: "Vui lòng chọn thời gian",
                  validate: (value) => {
                    const [hours, minutes] = value.split(":");
                    if (parseInt(hours) < 0 || parseInt(hours) > 23)
                      return "Giờ không hợp lệ";
                    if (parseInt(minutes) < 0 || parseInt(minutes) > 59)
                      return "Phút không hợp lệ";
                    return true;
                  },
                })}
                disabled={isLoading}
                className={`
                    w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm
                    ${errors.time ? "border-red-300" : "border-gray-300"}
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    disabled:bg-gray-50 disabled:text-gray-500
                  `}
              />
            </FormField>
          </div>

          {/* Status Field */}
          <FormField label="Trạng thái" error={errors.status?.message}>
            <select
              {...register("status", {
                required: "Vui lòng chọn trạng thái",
              })}
              disabled={isLoading}
              className={`
                w-full rounded-lg border h-12 sm:h-10 px-3 text-base sm:text-sm
                ${errors.status ? "border-red-300" : "border-gray-300"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                disabled:bg-gray-50 disabled:text-gray-500
              `}
            >
              {STATUS_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </FormField>

          {/* Notes */}
          <FormField label="Ghi chú">
            <textarea
              {...register("notes")}
              rows={3}
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 p-3 text-base sm:text-sm 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    disabled:bg-gray-50 disabled:text-gray-500 resize-none"
              placeholder="Thêm ghi chú (không bắt buộc)"
            />
          </FormField>
        </form>
      </div>

      {/* Footer - Static */}
      <div className="flex-none p-4 sm:p-6 border-t bg-white">
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading || isSubmitting}
            className="w-full sm:w-auto order-1 sm:order-none h-12 sm:h-10 px-4
              text-sm font-medium text-gray-700 bg-white border border-gray-300 
              rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            Hủy
          </button>
          <button
            type="submit"
            form="transaction-form"
            disabled={isLoading || isSubmitting}
            className={`
              w-full sm:w-auto h-12 sm:h-10 inline-flex items-center justify-center px-4
              text-sm font-medium text-white rounded-lg 
              disabled:opacity-50 disabled:cursor-not-allowed
              ${
                isLoading || isSubmitting
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {isLoading || isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Đang xử lý...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                {initialData ? "Cập nhật" : "Tạo giao dịch"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
