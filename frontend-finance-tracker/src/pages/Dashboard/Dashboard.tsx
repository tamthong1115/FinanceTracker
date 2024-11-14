import React, { useState } from "react";
import { Header } from "../../components/main/Header";
import { Sidebar } from "../../components/main/Sidebar";
import { Transactions } from "../../components/main/Transactions/Transactions.tsx";
import Goals from "../../components/main/Goals/Goals";
import Reports from "../../components/main/Reports/Reports";
import Accounts from "../../components/main/Accounts/Accounts";
import Budget from "../Budget/Budget.tsx";
import DashboardTest from "./DashboardTest.tsx";
// import {Setting} from "../../components/main/Setting/Setting";

const Dashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Tổng quan");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const renderContent = () => {
    switch (activeItem) {
      case "Giao dịch":
        return <Transactions />;
      case "Ngân sách":
            return <Budget/>;
        case "Mục tiêu":
        return <Goals />;
      case "Báo cáo":
        return <Reports />;
      case "Tài khoản":
        return <Accounts />;
      case "Cài đặt":
        // return <Setting/>;
        return <div>Setting</div>;
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Tổng quan</h2>
              <DashboardTest  />
          </div>
        );
    }
  };

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
        <main
          className={`transition-all duration-300 p-6 bg-gray-100 min-h-screen ${
            isSidebarExpanded ? "ml-64" : "ml-20"
          }`}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
