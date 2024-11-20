import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Plus, Upload } from "lucide-react";
import axiosInstance from "../../../config/axiosConfig";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import TransactionImport from "./TransactionImport";
import useDocumentTitle from '../../../hooks/useDocumentTitle';

type TransactionType = 'EXPENSE' | 'INCOME';
type TransactionStatus = 'COMPLETED' | 'PENDING' | 'CANCELLED';  // Add this line

interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  paymentMethod: string;
  status: TransactionStatus;  // Add this line
  notes?: string;
}

interface PaginatedResponse {
  content: Transaction[];
  totalElements: number;
  totalPages: number;
}

export interface TransactionListProps {
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

const Transactions = () => {
  useDocumentTitle('Transactions');
  // State Management
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isImportOpen, setIsImportOpen] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  // Fetch transactions with pagination
  const fetchTransactions = async (page = currentPage, size = pageSize) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<PaginatedResponse>("/api/transactions", {
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
    void fetchTransactions();
  }, [currentPage, pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle Transactions
  const handleCreateTransaction = async (data: Omit<Transaction, 'id'>) => {
    try {
      setLoading(true);
      await axiosInstance.post("/api/transactions", data);
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

  const handleUpdateTransaction = async (id: number, data: Partial<Transaction>) => {
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

  const handleDeleteTransaction = async (id: number) => {
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
  const handleImportTransactions = async (importedData: Omit<Transaction, 'id'>[]) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<{ success: boolean }>("/api/transactions/bulk", importedData);
      if (response.data.success) {
        toast.success("Transactions imported successfully");
        void fetchTransactions();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to import transactions: ${error.message}`);
      } else {
        toast.error("Failed to import transactions");
      }
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
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize: number) => {
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
        onEdit={(transaction: Transaction) => {
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50">
          <div className="bg-white w-full sm:w-[600px] h-[92vh] sm:max-h-[700px] rounded-t-2xl sm:rounded-lg flex flex-col">
            <TransactionForm
              initialData={selectedTransaction ? { ...selectedTransaction } : undefined}
              onSubmit={async (data) => {
                if (selectedTransaction) {
                  await handleUpdateTransaction(selectedTransaction.id, data);
                } else {
                  await handleCreateTransaction(data);
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
