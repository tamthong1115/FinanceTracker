import React from 'react';
import {useForm} from 'react-hook-form';
import {Transaction, TransactionFormData} from "../../../types/transaction.ts";

interface TransactionFormProps {
    initialData?: Transaction;
    onSubmit: (data: TransactionFormData) => Promise<void>;
    isLoading?: boolean;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
                                                                    initialData,
                                                                    onSubmit,
                                                                    isLoading
                                                                }) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<TransactionFormData>({
        defaultValues: initialData || {
            type: 'EXPENSE',
            date: new Date().toISOString().split('T')[0]
        }
    });

    const transactionType = watch('type');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
                {/* Type Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className={`
              flex items-center justify-center p-2 rounded-md cursor-pointer
              ${transactionType === 'INCOME'
                            ? 'bg-green-100 text-green-800 ring-2 ring-green-500'
                            : 'bg-gray-100 text-gray-800'}
            `}>
                            <input
                                type="radio"
                                {...register('type')}
                                value="INCOME"
                                className="sr-only"
                            />
                            <span>Income</span>
                        </label>
                        <label className={`
              flex items-center justify-center p-2 rounded-md cursor-pointer
              ${transactionType === 'EXPENSE'
                            ? 'bg-red-100 text-red-800 ring-2 ring-red-500'
                            : 'bg-gray-100 text-gray-800'}
            `}>
                            <input
                                type="radio"
                                {...register('type')}
                                value="EXPENSE"
                                className="sr-only"
                            />
                            <span>Expense</span>
                        </label>
                    </div>
                </div>

                {/* Amount */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₫</span>
                        <input
                            type="number"
                            step="0.01"
                            {...register('amount', {required: 'Amount is required', min: 0})}
                            className={`
                pl-8 w-full rounded-md border ${errors.amount ? 'border-red-500' : 'border-gray-300'}
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              `}
                        />
                    </div>
                    {errors.amount && (
                        <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <input
                        type="text"
                        {...register('description', {required: 'Description is required'})}
                        className={`
              w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'}
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            `}
                    />
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>
                    <select
                        {...register('category', {required: 'Category is required'})}
                        className={`
              w-full rounded-md border ${errors.category ? 'border-red-500' : 'border-gray-300'}
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            `}
                    >
                        <option value="">Select category</option>
                        <option value="Food & Dining">Food & Dining</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Housing">Housing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Education">Education</option>
                        <option value="Income">Income</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.category && (
                        <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        {...register('date', {required: 'Date is required'})}
                        className={`
              w-full rounded-md border ${errors.date ? 'border-red-500' : 'border-gray-300'}
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            `}
                    />
                    {errors.date && (
                        <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                </div>

                {/* Payment Method */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Payment Method
                    </label>
                    <select
                        {...register('paymentMethod', {required: 'Payment method is required'})}
                        className={`
              w-full rounded-md border ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'}
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            `}
                    >
                        <option value="">Select payment method</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="E-Wallet">E-Wallet</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.paymentMethod && (
                        <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
                    )}
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notes
                    </label>
                    <textarea
                        {...register('notes')}
                        rows={3}
                        className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`
            px-4 py-2 rounded-md text-white
            ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
            transition-colors duration-200
          `}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
                    ) : (
                        'Save Transaction'
                    )}
                </button>
            </div>
        </form>
    );
};