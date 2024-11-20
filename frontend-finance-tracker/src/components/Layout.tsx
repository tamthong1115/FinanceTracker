import PropTypes from "prop-types";
import Header from "./public-pages/Header/Header";
import Footer from "./public-pages/Footer/Footer";

type LayoutProps = {
  children: PropTypes.ReactNodeLike;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-90 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
