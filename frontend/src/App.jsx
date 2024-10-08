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
      </Routes>
    </Router>
  );
}

export default App;
