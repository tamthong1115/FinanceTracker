import {useState} from "react";
import {Plus} from "lucide-react";

const Goals = () => {
    const [goals, setGoals] = useState([
        {id: 1, name: 'Mua nhà', target: 1000000000, current: 250000000, deadline: '2025-12-31'},
        {id: 2, name: 'Du lịch Châu Âu', target: 50000000, current: 30000000, deadline: '2024-06-30'},
        // Thêm các mục tiêu mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mục tiêu tài chính</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                <Plus size={20} className="mr-2"/>
                Thêm mục tiêu
            </button>
            {goals.map(goal => (
                <div key={goal.id} className="mb-4 p-4 border rounded-md">
                    <h3 className="text-lg font-semibold mb-2">{goal.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Hạn: {goal.deadline}</p>
                    <div className="flex justify-between items-center mb-2">
                        <span>{goal.current.toLocaleString()} đ</span>
                        <span>{goal.target.toLocaleString()} đ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{width: `${(goal.current / goal.target) * 100}%`}}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Goals;