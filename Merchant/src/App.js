
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatingMerchant from "./pages/CreatingMerchant";
import EditMerchant from "./pages/EditMerchant";
import MerchantLogin from "./pages/MerchantLogin";
import MerchantCreateProduct from "./pages/MerchantCreateProduct";
import MerchantPage from "./pages/MerchantPage";
import Drop from "./pages/Drop";
import Category from "./pages/CategoryForm";
import CategoryPage from "./pages/CategoryPage";
import IntroPage from "./pages/IntroPage";
import Navigation from "./components/Navigation";
// import { CartContext } from "../../EBAY/src/Context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/createmerchant" element={<CreatingMerchant />}></Route>
          <Route path="/editmerchant" element={<EditMerchant />}></Route>
          <Route path="/loginmerchant" element={<MerchantLogin />}></Route>
          <Route path="/createproduct/:id" element={<MerchantCreateProduct />}></Route>
          <Route path="/merchantpage" element={<MerchantPage />}></Route>
          <Route path="/catform" element={<Category />}></Route>
          <Route path="/cat" element={<CategoryPage />}></Route>
          <Route path="/" element={<IntroPage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;