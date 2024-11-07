import {useState} from "react";
import {Plus} from "lucide-react";
import {Link} from "react-router-dom";

export const Budget = () => {
    const [budgets, setBudgets] = useState([
        {id: 1, category: "Ăn uống", limit: 3000000, spent: 2500000},
        {id: 2, category: "Mua sắm", limit: 2000000, spent: 1800000},
        // Thêm các ngân sách mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ngân sách</h2>
            <Link to={"/budget"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                    <Plus size={20} className="mr-2"/>
                    Thêm ngân sách
                </button>
            </Link>
            {budgets.map((budget) => (
                <div key={budget.id} className="mb-4 p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{budget.category}</h3>
                        <span>
              {budget.spent.toLocaleString()} đ /{" "}
                            {budget.limit.toLocaleString()} đ
            </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{width: `${(budget.spent / budget.limit) * 100}%`}}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
