import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoutes";
import { useUserStore } from "./Store";

axios.defaults.withCredentials = true;
function App() {
  const { user } = useUserStore();
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route
        path="/checkout"
        element={
          <ProtectedRoute isAllowed={user}>
            <Checkout />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
