import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/main/Sidebar";
import { Header } from "../../components/main/Header";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarExpanded={isSidebarExpanded} />
        <main
          className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
            isSidebarExpanded ? "ml-64" : "ml-20"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
