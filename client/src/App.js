import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import CartPage from './pages/CartPage'
import TestPage from './pages/Test'

// Components
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [products, setProduct] = useState([]);

  const addCart = (product) => {
    console.log("adding to cart");
    setProduct(product);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/product/:id" element={<ProductPage/>}/> */}
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/shop" element={<ShopPage />} onCart={addCart} />
        <Route exact path="/test" element={<TestPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
