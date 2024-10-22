import React, { useState, useEffect } from "react";
import { Transaction, TransactionFormData } from "../../../types/transaction";
import { transactionApi } from "../../../services/api/transactionApi";
import { TransactionList } from "./TransactionList";
import { TransactionForm } from "./TransactionForm";
import { TransactionFilters, FilterCriteria } from "./TransactionFilters";
import { toast } from "react-toastify";

export const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const data = await transactionApi.getAll();
      setTransactions(data);
      setFilteredTransactions(data);
    } catch (error) {
      toast.error("Failed to fetch transactions");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data: TransactionFormData) => {
    try {
      setIsSubmitting(true);
      if (selectedTransaction) {
        const updated = await transactionApi.update(
          selectedTransaction.id,
          data
        );
        setTransactions((prev) =>
          prev.map((t) => (t.id === updated.id ? updated : t))
        );
      } else {
        const created = await transactionApi.create(data);
        setTransactions((prev) => [...prev, created]);
      }
      setIsModalOpen(false);
      setSelectedTransaction(null);
      toast.success(
        `Transaction ${selectedTransaction ? "updated" : "created"} successfully`
      );
      await fetchTransactions();
    } catch (error) {
      toast.error(
        `Failed to ${selectedTransaction ? "update" : "create"} transaction`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await transactionApi.delete(id);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
      toast.success("Transaction deleted successfully");
      await fetchTransactions();
    } catch (error) {
      toast.error("Failed to delete transaction");
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

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your income and expenses
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Transaction
        </button>
      </div>

      <TransactionFilters
        onFilterChange={handleFilterChange}
        disabled={isLoading}
      />

      <TransactionList
        transactions={filteredTransactions}
        onEdit={(transaction) => {
          setSelectedTransaction(transaction);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            />

            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
              &#8203;
            </span>

            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                      {selectedTransaction
                        ? "Edit Transaction"
                        : "New Transaction"}
                    </h3>
                    <TransactionForm
                      initialData={selectedTransaction || undefined}
                      onSubmit={handleSubmit}
                      isLoading={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
