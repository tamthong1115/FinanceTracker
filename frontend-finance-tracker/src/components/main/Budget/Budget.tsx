import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, AlertCircle } from "lucide-react";
import { useBudgets } from "../../../hooks/useBudgets";
import { BudgetForm } from "./BudgetForm";
import LoadingSpinner from "../../LoadingSpinner";

export const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const {
    budgets,
    loading,
    error,
    fetchBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
  } = useBudgets();

  useEffect(() => {
    fetchBudgets();
  }, [fetchBudgets]);

  const handleSubmit = async (data) => {
    try {
      if (selectedBudget) {
        await updateBudget(selectedBudget.id, data);
      } else {
        await createBudget(data);
      }
      setIsModalOpen(false);
      setSelectedBudget(null);
    } catch (err) {
      console.error("Error submitting budget:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      try {
        await deleteBudget(id);
      } catch (err) {
        console.error("Error deleting budget:", err);
      }
    }
  };

  if (error) {
    return (
      <div className="p-4 text-center">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => fetchBudgets()}
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
          <h1 className="text-2xl font-bold text-gray-900">Budget Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track your spending limits
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedBudget(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          <Plus className="mr-2" size={20} />
          Add Budget
        </button>
      </div>

      {loading && !budgets.length ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100;
            const isOverBudget = percentage > 100;
            const isNearLimit = percentage > 80 && percentage <= 100;

            return (
              <div
                key={budget.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {budget.category}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedBudget(budget);
                          setIsModalOpen(true);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(budget.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Spent</span>
                      <span>{`${percentage.toFixed(1)}%`}</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isOverBudget
                            ? "bg-red-500"
                            : isNearLimit
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>

                    <div className="mt-3 flex justify-between items-baseline">
                      <span className="text-2xl font-bold">
                        {budget.spent.toLocaleString("vi-VN")} ₫
                      </span>
                      <span className="text-gray-500">
                        of {budget.limit.toLocaleString("vi-VN")} ₫
                      </span>
                    </div>

                    {(isOverBudget || isNearLimit) && (
                      <div
                        className={`mt-3 flex items-center text-sm ${
                          isOverBudget ? "text-red-600" : "text-yellow-600"
                        }`}
                      >
                        <AlertCircle size={16} className="mr-1" />
                        <span>
                          {isOverBudget ? "Over budget!" : "Approaching limit"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Period</span>
                      <span>{budget.period}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Last Updated</span>
                      <span>
                        {new Date(budget.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {selectedBudget ? "Edit Budget" : "Add Budget"}
            </h2>
            <BudgetForm
              initialData={selectedBudget}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsModalOpen(false);
                setSelectedBudget(null);
              }}
              isLoading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};
