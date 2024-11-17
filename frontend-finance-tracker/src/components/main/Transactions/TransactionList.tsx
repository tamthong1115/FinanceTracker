import React from "react";
import { Transaction } from "../../../types/transaction";
import { format } from "date-fns";
import { Edit2, Trash2, Eye } from "lucide-react";

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onEdit,
  onDelete,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse h-16 bg-gray-100 rounded-lg" />
        ))}
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <Eye className="mx-auto h-12 w-12" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">
          No transactions yet
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by adding your first transaction.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {format(new Date(transaction.date), "dd/MM/yyyy")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyle(
                    transaction.category
                  )}`}
                >
                  {transaction.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={
                    transaction.type === "INCOME"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.type === "INCOME" ? "+" : "-"}
                  {formatAmount(transaction.amount)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.type === "INCOME"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {transaction.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(transaction)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit2
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                  <button
                    onClick={() => onDelete(transaction.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const getCategoryStyle = (category: string) => {
  const styles: Record<string, string> = {
    "Food & Dining": "bg-yellow-100 text-yellow-800",
    Shopping: "bg-blue-100 text-blue-800",
    Housing: "bg-purple-100 text-purple-800",
    Transportation: "bg-green-100 text-green-800",
    Utilities: "bg-gray-100 text-gray-800",
    Healthcare: "bg-red-100 text-red-800",
    Entertainment: "bg-pink-100 text-pink-800",
  };
  return styles[category] || "bg-gray-100 text-gray-800";
};

export default TransactionList;
