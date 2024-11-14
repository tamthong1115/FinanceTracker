import { FC, useState } from "react";
import { Bell, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import SearchBar from "./SearchBar";
import ProfileModal from "./ProfileModal";
import { HeaderProps } from "../../types/props";

export const Header: FC<HeaderProps> = ({ isSidebarExpanded }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      navigate("/login");
    }
  };

  return (
    <header
      className={`bg-white shadow-md p-4 flex items-center justify-between 
            transition-all duration-300 ${
              isSidebarExpanded ? "ml-64" : "ml-20"
            }`}
    >
      <div className="w-1/4"></div>
      <SearchBar />
      <div className="w-1/4 flex items-center justify-end space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
          <Bell size={24} className="text-gray-600" />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative focus:outline-none"
          >
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
            />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              ></div>

              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-20 py-2 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/avatar.png"
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user?.username || "User"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsProfileModalOpen(true);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <User size={16} />
                    <span>Edit Profile</span>
                  </button>

                  <div className="border-t border-gray-200 my-1"></div>

                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
