import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";

// Components
import Navbar from "./components/Navbar";
import { useState } from "react";
import { CartProvider } from "./Contexts/CartContext";
import { HeartProvider } from "./Contexts/HeartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <HeartProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/product/:id" element={<ProductPage/>}/> */}
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/shop" element={<ShopPage />} />
          </Routes>
        </HeartProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
