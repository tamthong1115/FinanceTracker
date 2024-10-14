import {useState} from "react";
import {
    BarChart2,
    ChevronLeft,
    ChevronRight,
    DollarSign,
    LayoutDashboard,
    Settings,
    Tag,
    Target,
    Wallet
} from "lucide-react";

export const Sidebar = ({activeItem, setActiveItem}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        {icon: <LayoutDashboard size={24}/>, text: 'Tổng quan', href: '#'},
        {icon: <DollarSign size={24}/>, text: 'Giao dịch', href: '#'},
        {icon: <Tag size={24}/>, text: 'Ngân sách', href: '#'},
        {icon: <Target size={24}/>, text: 'Mục tiêu', href: '#'},
        {icon: <BarChart2 size={24}/>, text: 'Báo cáo', href: '#'},
        {icon: <Wallet size={24}/>, text: 'Tài khoản', href: '#'},
    ];

    return (
        <nav
            className={`bg-white shadow-lg fixed h-full z-10 flex flex-col justify-between transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
            <div>
                <div className="p-4 flex items-center justify-between">
                    <img src="/icon.png" alt="Logo" className="w-12 h-12"/>
                    {isExpanded && <span className="font-bold text-xl">FinanceApp</span>}
                </div>
                <ul className="mt-6">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative">
                            <a
                                href={item.href}
                                className={`flex items-center py-4 px-6 text-gray-700 hover:bg-gray-100 ${
                                    activeItem === item.text ? 'bg-blue-100 text-blue-600' : ''
                                }`}
                                onClick={() => setActiveItem(item.text)}
                            >
                                {item.icon}
                                {isExpanded && <span className="ml-4">{item.text}</span>}
                            </a>
                            {!isExpanded && (
                                <span
                                    className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {item.text}
                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative">
                <a
                    href="#"
                    className={`flex items-center py-4 px-6 text-gray-700 hover:bg-gray-100 ${
                        activeItem === 'Cài đặt' ? 'bg-blue-100 text-blue-600' : ''
                    }`}
                    onClick={() => setActiveItem('Cài đặt')}
                >
                    <Settings size={24}/>
                    {isExpanded && <span className="ml-4">Cài đặt</span>}
                </a>
                {!isExpanded && (
                    <span
                        className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Cài đặt
          </span>
                )}
            </div>
            <button
                className="absolute top-1/2 -right-3 bg-white rounded-full p-1 shadow-md"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
            </button>
        </nav>
    );
};

export default Sidebar;