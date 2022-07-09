import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// Screens
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import TestPage from "./pages/Test";
import AboutPage from "./pages/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Sections/Footer";
import { CartProvider } from "./Contexts/CartContext";
import { HeartProvider } from "./Contexts/HeartContext";
import { CurrencyProvider } from "./Contexts/CurrencyContext";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3000"));
  }, []);


  return (
    <Router>
      <CartProvider>
        <HeartProvider>
          <CurrencyProvider>
            <Navbar socket={socket}/>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/cart" element={<CartPage />} />
              <Route path="/shop" element={<ShopPage socket={socket}/>} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/test" element={<TestPage />} />
            </Routes>
            <Footer />
          </CurrencyProvider>
        </HeartProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
