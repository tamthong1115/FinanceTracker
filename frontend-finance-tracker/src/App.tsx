import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // the number retry to request if it failed
        },
    },
});
function App() {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
