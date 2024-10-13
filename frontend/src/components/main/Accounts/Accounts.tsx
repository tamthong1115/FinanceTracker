import {useState} from "react";
import {Edit2, Plus, Trash2} from "lucide-react";

const Accounts = () => {
    const [accounts, setAccounts] = useState([
        {id: 1, name: 'Tài khoản chính', balance: 15000000},
        {id: 2, name: 'Tiết kiệm', balance: 50000000},
        // Thêm các tài khoản mẫu khác
    ]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Quản lý tài khoản</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center mb-4">
                <Plus size={20} className="mr-2"/>
                Thêm tài khoản
            </button>
            {accounts.map(account => (
                <div key={account.id} className="mb-4 p-4 border rounded-md flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">{account.name}</h3>
                        <p className="text-2xl font-bold text-green-600">{account.balance.toLocaleString()} đ</p>
                    </div>
                    <div>
                        <button className="text-blue-500 mr-2"><Edit2 size={20}/></button>
                        <button className="text-red-500"><Trash2 size={20}/></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accounts;