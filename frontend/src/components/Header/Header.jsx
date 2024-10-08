import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Welcome to Finance Tracker</h1>
      <Link to="/about-us" className="text-lg font-bold">
          About Us
        </Link>
    </header>
  );
};

export default Header;
