import {useState} from "react";
import {Search, X} from "lucide-react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Mô phỏng tìm kiếm (thay thế bằng logic tìm kiếm thực tế)
        const results = [
            {type: 'transaction', title: 'Mua sắm tại siêu thị', amount: -50},
            {type: 'goal', title: 'Tiết kiệm cho kỳ nghỉ', progress: 70},
            {type: 'budget', title: 'Ngân sách ăn uống', remaining: 200},
        ].filter(item =>
            item.title.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <div className="relative w-full max-w-xl">
            <input
                type="text"
                placeholder="Tìm kiếm giao dịch, mục tiêu, ngân sách..."
                className="w-full pl-10 pr-4 py-2 border rounded-full"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20}/>
            {searchTerm && (
                <button
                    className="absolute right-3 top-2.5 text-gray-400"
                    onClick={() => {
                        setSearchTerm('');
                        setSearchResults([]);
                    }}
                >
                    <X size={20}/>
                </button>
            )}
            {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                    {searchResults.map((result, index) => (
                        <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                            {result.type === 'transaction' && (
                                <p>{result.title} - {result.amount > 0 ? '+' : ''}{result.amount}đ</p>
                            )}
                            {result.type === 'goal' && (
                                <p>{result.title} - Tiến độ: {result.progress}%</p>
                            )}
                            {result.type === 'budget' && (
                                <p>{result.title} - Còn lại: {result.remaining}đ</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;