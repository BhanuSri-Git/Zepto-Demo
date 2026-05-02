import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./zeptoOnion";
import HomeHeader from "./zeptoHomeHeader";
import ProductCategory from "./productsByCategory";
import SearchBySubCategory from "./zeptoSearchBySubcategory";
import ZeptoAddToCart from "./zeptoAddToCart";
import CartPage from "./cartPage";
import { CartProvider } from "./context/CartContext"; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<HomeHeader />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Home/:category" element={<ProductCategory />} />
          <Route path="/Home/:category/:subcategory" element={<ProductCategory />} />
          <Route path="/Home/subs/:subcategory" element={<SearchBySubCategory />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
