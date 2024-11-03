import React, { useState } from "react";
import { Budget } from "../../../hooks/useBudgets";

interface BudgetFiltersProps {
  budgets: Budget[];
  setFilteredBudgets: (budgets: Budget[]) => void;
}

export const BudgetFilters: React.FC<BudgetFiltersProps> = ({
  budgets,
  setFilteredBudgets,
}) => {
  const [filters, setFilters] = useState({
    category: "",
    period: "",
    status: "", // 'all', 'over', 'near', 'safe'
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    let filtered = [...budgets];

    // Apply category filter
    if (newFilters.category) {
      filtered = filtered.filter(
        (budget) => budget.category === newFilters.category
      );
    }

    // Apply period filter
    if (newFilters.period) {
      filtered = filtered.filter(
        (budget) => budget.period === newFilters.period
      );
    }

    // Apply status filter
    if (newFilters.status) {
      filtered = filtered.filter((budget) => {
        const percentage = (budget.spent / budget.limit) * 100;
        switch (newFilters.status) {
          case "over":
            return percentage > 100;
          case "near":
            return percentage > 80 && percentage <= 100;
          case "safe":
            return percentage <= 80;
          default:
            return true;
        }
      });
    }

    setFilteredBudgets(filtered);
  };

  // Get unique categories and periods from budgets
  const categories = Array.from(new Set(budgets.map((b) => b.category)));
  const periods = Array.from(new Set(budgets.map((b) => b.period)));

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Period Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Period
          </label>
          <select
            name="period"
            value={filters.period}
            onChange={handleFilterChange}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Periods</option>
            {periods.map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="over">Over Budget</option>
            <option value="near">Near Limit</option>
            <option value="safe">Safe</option>
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(filters.category || filters.period || filters.status) && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              setFilters({ category: "", period: "", status: "" });
              setFilteredBudgets(budgets);
            }}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

