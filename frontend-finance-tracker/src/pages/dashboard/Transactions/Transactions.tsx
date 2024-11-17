import React, { useEffect, useState } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import { Transaction, TransactionFormData } from "../../../types/transaction";
import { TransactionList } from "./TransactionList";
import { TransactionForm } from "./TransactionForm";
import { FilterCriteria, TransactionFilters } from "./TransactionFilters";
import { toast } from "react-toastify";

export const Transactions: React.FC = () => {
  const {
    transactions,
    loading,
    error,
    fetchTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  } = useTransactions();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<
    Transaction | undefined
  >(undefined);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const handleSubmit = async (data: TransactionFormData) => {
    try {
      if (selectedTransaction) {
        await updateTransaction(selectedTransaction.id, data);
        toast.success("Transaction updated successfully");
      } else {
        await createTransaction(data);
        toast.success("Transaction created successfully");
      }
      handleCloseModal();
      fetchTransactions(); // Refresh the list
    } catch (err) {
      const error = err as Error;
      toast.error(error.message || "Error processing transaction");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(undefined);
  };

  const handleFilterChange = (filters: FilterCriteria) => {
    let result = [...transactions];

    if (filters.startDate) {
      result = result.filter(
        (t) => new Date(t.date) >= new Date(filters.startDate!)
      );
    }
    if (filters.endDate) {
      result = result.filter(
        (t) => new Date(t.date) <= new Date(filters.endDate!)
      );
    }
    if (filters.type) {
      result = result.filter((t) => t.type === filters.type);
    }
    if (filters.category) {
      result = result.filter((t) => t.category === filters.category);
    }
    if (filters.minAmount) {
      result = result.filter((t) => t.amount >= filters.minAmount!);
    }
    if (filters.maxAmount) {
      result = result.filter((t) => t.amount <= filters.maxAmount!);
    }

    setFilteredTransactions(result);
  };

  if (error) {
    return (
      <div className="p-4 text-center">
        <div className="text-red-600 bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold">Error loading transactions</h3>
          <p>{error}</p>
          <button
            onClick={() => fetchTransactions()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your transactions</p>
        </div>
        <button
          onClick={() => {
            setSelectedTransaction(undefined);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          Add Transaction
        </button>
      </div>

      {/* Filters Section */}
      <TransactionFilters
        onFilterChange={handleFilterChange}
        disabled={loading}
      />

      {/* Transactions List */}
      <TransactionList
        transactions={filteredTransactions}
        onEdit={(transaction) => {
          setSelectedTransaction(transaction);
          setIsModalOpen(true);
        }}
        onDelete={async (id) => {
          if (
            window.confirm("Are you sure you want to delete this transaction?")
          ) {
            try {
              await deleteTransaction(id);
              toast.success("Transaction deleted successfully");
              fetchTransactions(); // Refresh the list
            } catch (err) {
              const error = err as Error;
              toast.error(error.message || "Error deleting transaction");
            }
          }
        }}
        isLoading={loading && !transactions.length}
      />

      {/* Transaction Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedTransaction ? "Edit Transaction" : "Add Transaction"}
            </h2>
            <TransactionForm
              initialData={selectedTransaction}
              onSubmit={handleSubmit}
              onCancel={handleCloseModal}
              isLoading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
