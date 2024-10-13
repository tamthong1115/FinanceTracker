import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Define the prop types
type LayoutProps = {
  children: PropTypes.ReactNodeLike;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4">
          <Header />
        </div>
      </header>
      <main className="flex-1 container mx-auto py-10">{children}</main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
