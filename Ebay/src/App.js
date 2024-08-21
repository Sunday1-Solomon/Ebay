import Footer from "./components/home/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import Signin from "./pages/Signin";
import Reg from "./pages/Reg";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/reg" element={<Reg />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;