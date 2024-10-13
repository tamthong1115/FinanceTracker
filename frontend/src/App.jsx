import {
  Routes,
  BrowserRouter as Router,
  Route,
  // Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";

// pages
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LoginAndRegister/LoginForm";
import RegisterForm from "./pages/LoginAndRegister/RegisterForm";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <LoginForm />
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <RegisterForm />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

          <Route path={"/dashboard"} element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
