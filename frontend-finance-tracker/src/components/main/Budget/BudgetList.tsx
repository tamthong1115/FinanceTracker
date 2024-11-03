import React from "react";
import { Budget } from "../../../hooks/useBudgets";
import { Edit2, Trash2, AlertCircle } from "lucide-react";

interface BudgetListProps {
  budgets: Budget[];
  onEdit: (budget: Budget) => void;
  onDelete: (id: number) => void;
  loading?: boolean;
}

export const BudgetList: React.FC<BudgetListProps> = ({
  budgets,
  onEdit,
  onDelete,
  loading,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-white rounded-lg shadow-sm border border-gray-200 h-64"
          />
        ))}
      </div>
    );
  }

  if (budgets.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <AlertCircle className="mx-auto h-12 w-12" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">No budgets yet</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating your first budget.
        </p>
      </div>
    );
  }

  return (
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
                    onClick={() => onEdit(budget)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(budget.id)}
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
  );
};
