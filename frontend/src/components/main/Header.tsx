import {Bell} from "lucide-react";
import SearchBar from "./SearchBar";

export const Header = ({isSidebarExpanded}) => (
    <header
        className={`bg-white shadow-md p-4 flex items-center justify-between transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}>
        <div className="w-1/4"></div>
        <SearchBar />
        <div className="w-1/4 flex items-center justify-end space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
                <Bell size={24}/>
            </button>
            <img
                src="/avatar.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
            />
        </div>
    </header>
);