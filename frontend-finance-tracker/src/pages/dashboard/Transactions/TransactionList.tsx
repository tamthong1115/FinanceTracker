import React from "react";
import { Edit2, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { format } from "date-fns";
import { Transaction, TransactionStatus } from "../../../types/transaction";

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onEdit,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  totalItems,
}) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusStyle = (status: TransactionStatus): string => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryStyle = (category: string): string => {
    const colors: { [key: string]: string } = {
      "Food & Dining": "bg-orange-100 text-orange-800",
      Shopping: "bg-blue-100 text-blue-800",
      Housing: "bg-purple-100 text-purple-800",
      Transportation: "bg-green-100 text-green-800",
      Utilities: "bg-gray-100 text-gray-800",
      Healthcare: "bg-red-100 text-red-800",
      Entertainment: "bg-pink-100 text-pink-800",
      Education: "bg-cyan-100 text-cyan-800",
      Income: "bg-emerald-100 text-emerald-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(pageSize)].map((_, i) => (
          <div key={i} className="bg-gray-100 animate-pulse rounded-lg h-16" />
        ))}
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Không có giao dịch nào</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Ngày
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Mô tả
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Danh mục
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Số tiền
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Phương thức
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Trạng thái
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
              >
                Thao tác
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === "INCOME" ? (
                      <ArrowUp className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500 mr-2" />
                    )}
                    <span className="text-sm text-gray-900">
                      {transaction.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
                    {formatCurrency(transaction.amount)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(transaction)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(transaction.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50"
              }`}
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50"
              }`}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * pageSize + 1}
              </span>{" "}
              -{" "}
              <span className="font-medium">
                {Math.min(currentPage * pageSize, totalItems)}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="text-sm border-gray-300 rounded-md"
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium
                  ${
                    currentPage === 1
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
              >
                First
              </button>
              {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                const isCurrentPage = pageNumber === currentPage;
                const isNearCurrentPage =
                  Math.abs(pageNumber - currentPage) <= 1;
                const showEllipsis =
                  !isNearCurrentPage && (idx === 1 || idx === totalPages - 2);

                if (!isNearCurrentPage && !showEllipsis) return null;

                return showEllipsis ? (
                  <span
                    key={idx}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={idx}
                    onClick={() => onPageChange(pageNumber)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                      ${
                        isCurrentPage
                          ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium
                  ${
                    currentPage === totalPages
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
              >
                Last
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
