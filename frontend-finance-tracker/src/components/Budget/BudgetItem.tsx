// src/components/main/Budget/BudgetItem.tsx
import React from "react";

interface BudgetItemProps {
  iconUrl: string;
  title: string;
  amountLeft: number;
  date: string;
    amount: number;
    spent: number;
}

const BudgetItem: React.FC<BudgetItemProps> = ({
  iconUrl,
  title,
  amountLeft,
  date,
    amount,
    spent,
}) => {
    const percentageSpent = (spent / amount) * 100;

    return (
    <div className="flex items-center p-4 mx-10 bg-gray-800 rounded-lg">
      <img
        src={iconUrl}
        alt={`Icon representing ${title}`}
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-4 flex-1">
        <div className="text-lg text-white">{title}</div>
          <div className="progress-bar mt-2 bg-gray-600 rounded-full h-2">
              <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{width: `${percentageSpent}%`}}
              ></div>
          </div>
          <div className="text-white mt-1">{date}</div>
      </div>
      <div className="text-right">
        <div className="text-lg text-white">{amount}</div>
        <div className="text-white">Left {amountLeft}</div>
      </div>
    </div>
  );
};

export default BudgetItem;
