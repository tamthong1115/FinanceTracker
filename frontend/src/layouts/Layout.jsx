    import PropTypes from "prop-types";

    import Header from "../components/Header/Header";
    // import Hero from "../components/Hero/Hero";
    import Footer from "../components/Footer/Footer";

    const Layout = ({ children }) => {
      return (
        <div className="flex min-h-screen flex-col">
          <div className="bg-indigo-400 pb-12">
            <div className="container mx-0 px-0 py-4">
              <Header />
            </div>

          </div>
          <div className="container mx-0 flex-1 px-0 py-10">{children}</div>
          <Footer />
        </div>
      );
    };

    Layout.propTypes = {
      children: PropTypes.node.isRequired,
    };

    export default Layout;
