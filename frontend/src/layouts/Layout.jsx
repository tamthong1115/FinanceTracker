import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="">
        <div className="container mx-auto py-4">
          <Header />
        </div>
      </div>
      <div className="container mx-auto flex-1 pb-10">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
