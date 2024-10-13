import {useState} from "react";
import {Edit2, Filter, Plus, Trash2} from "lucide-react";

export const Transactions = () => {
    const [transactions, setTransactions] = useState([
        {id: 1, date: '2024-02-15', description: 'Lương tháng 2', amount: 10000000, type: 'income'},
        {id: 2, date: '2024-02-16', description: 'Mua sắm', amount: -500000, type: 'expense'},
        // Thêm các giao dịch mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Giao dịch</h2>
            <div className="mb-4 flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                    <Plus size={20} className="mr-2"/>
                    Thêm giao dịch
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                    <Filter size={20} className="mr-2"/>
                    Lọc
                </button>
            </div>
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="text-left p-2">Ngày</th>
                    <th className="text-left p-2">Mô tả</th>
                    <th className="text-right p-2">Số tiền</th>
                    <th className="text-center p-2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id} className="border-b">
                        <td className="p-2">{transaction.date}</td>
                        <td className="p-2">{transaction.description}</td>
                        <td className={`p-2 text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount.toLocaleString()} đ
                        </td>
                        <td className="p-2 text-center">
                            <button className="text-blue-500 mr-2"><Edit2 size={16}/></button>
                            <button className="text-red-500"><Trash2 size={16}/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};