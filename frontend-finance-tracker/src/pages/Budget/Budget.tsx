import BudgetItem from "../../components/Budget/BudgetItem";
import { useEffect, useState } from "react";
import { getAllBudgets, type Budget } from "../../services/api/BudgetAPI";
import { Gauge } from "@mui/x-charts/Gauge";
import AddBudgetForm from "./AddBudgetForm";


const Budget = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [showAddBudgetForm, setShowAddBudgetForm] = useState(false);

  useEffect(() => {
    const fetchBudgets = async () => {
      const data = await getAllBudgets();
      setBudgets(data);
    };

    fetchBudgets();
  }, []);

  const totalBudget = budgets.reduce((acc, budget) => acc + budget.amount, 0);
  const amountSpent = budgets.reduce((acc, budget) => acc + budget.spent, 0);

  const percentageSpent = (amountSpent / totalBudget) * 100;

  
  const calculateDaysBetweenDates = (startDate: Date, endDate: Date): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.ceil(differenceInDays);
  };
  
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const daysRemaining = calculateDaysBetweenDates(today, endOfMonth);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-xl font-bold">Running Budgets</h1>
      <div className="flex justify-center mt-4">
        <div className="tab-active px-4 py-2">This month</div>
        <div className="px-4 py-2 text-gray-500">This week</div>
      </div>
      <div className="mt-8 text-center">
        <div className="relative inline-block">
          <div className="flex justify-center items-center">
            <Gauge
              width={500}
              height={300}
              value={percentageSpent}
              startAngle={-90}
              endAngle={90}
            />{" "}
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <div className="text-center">
            <div className="text-xl">{budgets.length}</div>
            <div className="text-gray-400">Total budgets</div>
          </div>
          <div className="text-center">
            <div className="text-xl">{amountSpent} $</div>
            <div className="text-gray-400">Total spent</div>
          </div>
          <div className="text-center">
            <div className="text-xl">{daysRemaining} days</div>
            <div className="text-gray-400">End of month</div>
          </div>
        </div>
        <button
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full"
            onClick={() => setShowAddBudgetForm(true)}
        >
          Create Budget
        </button>
      </div>
      <AddBudgetForm open={showAddBudgetForm} handleClose={() => setShowAddBudgetForm(false)} />

      <div className="mt-8 w-full">
        {budgets.map((budget) => (
            <BudgetItem
                key={budget.id}
                iconUrl="https://placehold.co/40x40"
                title={budget.categoryName}
            amountLeft={budget.amount - budget.spent}
            amount={budget.amount}
            spent={budget.spent}
            date={new Date(budget.startDate).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Budget;
