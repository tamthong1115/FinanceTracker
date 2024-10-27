import React, { useEffect, useState } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import { Transaction, TransactionFormData } from "../../../types/transaction";
import { TransactionList } from "./TransactionList";
import { TransactionForm } from "./TransactionForm";
import { FilterCriteria, TransactionFilters } from "./TransactionFilters";

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
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
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
      } else {
        await createTransaction(data);
      }
      setIsModalOpen(false);
      setSelectedTransaction(null);
    } catch (err) {
      console.error("Error submitting transaction:", err);
    }
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
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => fetchTransactions()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your transactions</p>
        </div>
        <button
          onClick={() => {
            setSelectedTransaction(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          Add Transaction
        </button>
      </div>

      <TransactionFilters
        onFilterChange={handleFilterChange}
        disabled={loading}
      />

      {loading && !transactions.length ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
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
              await deleteTransaction(id);
            }
          }}
          isLoading={loading}
        />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedTransaction ? "Edit Transaction" : "Add Transaction"}
            </h2>
            <TransactionForm
              initialData={selectedTransaction}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsModalOpen(false);
                setSelectedTransaction(null);
              }}
              isLoading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};
