import {useState} from 'react';
import {Header} from "../../components/main/Header";
import {Sidebar} from "../../components/main/Sidebar";
import {Transactions} from "../../components/main/Transactions/Transactions";
import Goals from "../../components/main/Goals/Goals";
import Reports from "../../components/main/Reports/Reports";
import {Budget} from "../../components/main/Budget/Budget";
import Accounts from "../../components/main/Accounts/Accounts";
import {Setting} from "../../components/main/Setting/Setting";


// export { Transactions, Budget, Goals, Reports, Dashboard };

// BalanceWidget Component
const BalanceWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Tổng số dư</h2>
    <p className="text-3xl font-bold text-green-600">$10,234.56</p>
  </div>
);

// IncomeExpenseWidget Component
const IncomeExpenseWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Thu chi tháng này</h2>
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-600">Thu</p>
        <p className="text-xl font-semibold text-green-600">+$5,678.90</p>
      </div>
      <div>
        <p className="text-sm text-gray-600">Chi</p>
        <p className="text-xl font-semibold text-red-600">-$3,456.78</p>
      </div>
    </div>
  </div>
);

// SavingsGoalWidget Component
const SavingsGoalWidget = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Mục tiêu tiết kiệm</h2>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
            Tiến độ
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600">
            70%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: "70%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></div>
      </div>
    </div>
  </div>
);


// DashboardContent Component
const DashboardContent = ({ activeItem, isSidebarExpanded }) => {
  const contentClass = `transition-all duration-300 p-6 bg-gray-100 min-h-screen ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`;

  switch (activeItem) {
    case 'Giao dịch':
      return <div className={contentClass}><Transactions /></div>;
    case 'Ngân sách':
      return <div className={contentClass}><Budget /></div>;
    case 'Mục tiêu':
      return <div className={contentClass}><Goals /></div>;
    case 'Báo cáo':
      return <div className={contentClass}><Reports /></div>;
    case 'Tài khoản':
      return <div className={contentClass}><Accounts /></div>;
    case 'Cài đặt':
      // return <div className={contentClass}><Setting /></div>;
    default:
      return (
          <div className={contentClass}>
            <h2 className="text-2xl font-bold mb-4">Tổng quan</h2>
            {/* Thêm nội dung tổng quan ở đây */}
          </div>
      );
  }
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Tổng quan');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
      <div className="flex bg-gray-100">
        <Sidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isExpanded={isSidebarExpanded}
            setIsExpanded={setIsSidebarExpanded}
        />
        <div className="flex-1 flex flex-col">
          <Header isSidebarExpanded={isSidebarExpanded} />
          <DashboardContent activeItem={activeItem} isSidebarExpanded={isSidebarExpanded} />
        </div>
      </div>
  );
};

export default Dashboard;