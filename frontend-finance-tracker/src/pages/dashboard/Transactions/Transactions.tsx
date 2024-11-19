import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Plus, Upload } from "lucide-react";
import axiosInstance from "../../../config/axiosConfig";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import TransactionImport from "./TransactionImport";

const Transactions = () => {
  // State Management
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch transactions with pagination
  const fetchTransactions = async (page = currentPage, size = pageSize) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/transactions", {
        params: {
          page: page - 1, // Backend uses 0-based pagination
          size,
          sort: "date,desc",
        },
      });
      setTransactions(response.data.content);
      setTotalItems(response.data.totalElements);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Failed to fetch transactions");
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [currentPage, pageSize]);

  // Handle Transactions
  const handleCreateTransaction = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/transactions", data);
      toast.success("Transaction created successfully");
      handleCloseModal();
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to create transaction");
      console.error("Error creating transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTransaction = async (id, data) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/api/transactions/${id}`, data);
      toast.success("Transaction updated successfully");
      handleCloseModal();
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to update transaction");
      console.error("Error updating transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTransaction = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    try {
      setLoading(true);
      await axiosInstance.delete(`/api/transactions/${id}`);
      toast.success("Transaction deleted successfully");
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to delete transaction");
      console.error("Error deleting transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Import
  const handleImportTransactions = async (importedData) => {
    try {
      setLoading(true);
      await axiosInstance.post("/api/transactions/bulk", importedData);
      toast.success("Transactions imported successfully");
      fetchTransactions(); // Refresh list
    } catch (error) {
      toast.error("Failed to import transactions");
      console.error("Error importing transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Modal Handlers
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  // Pagination Handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Giao dịch</h1>
          <p className="mt-1 text-sm text-gray-500">
            Quản lý các giao dịch thu chi
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsImportOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Upload className="w-4 h-4" />
            <span>Nhập từ file</span>
          </button>
          <button
            onClick={() => {
              setSelectedTransaction(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm giao dịch</span>
          </button>
        </div>
      </div>

      {/* Transaction List with Pagination */}
      <TransactionList
        transactions={transactions}
        onEdit={(transaction) => {
          setSelectedTransaction(transaction);
          setIsModalOpen(true);
        }}
        onDelete={handleDeleteTransaction}
        isLoading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        totalItems={totalItems}
      />

      {/* Transaction Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedTransaction
                ? "Chỉnh sửa giao dịch"
                : "Thêm giao dịch mới"}
            </h2>
            <TransactionForm
              initialData={selectedTransaction}
              onSubmit={(data) => {
                if (selectedTransaction) {
                  handleUpdateTransaction(selectedTransaction.id, data);
                } else {
                  handleCreateTransaction(data);
                }
              }}
              onCancel={handleCloseModal}
              isLoading={loading}
            />
          </div>
        </div>
      )}

      {/* Import Modal */}
      {isImportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <TransactionImport
              onImport={handleImportTransactions}
              onClose={() => setIsImportOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
