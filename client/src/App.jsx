import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";
import io from "socket.io-client";

//Contexts
import { CartProvider } from "./contexts/CartContext";
import { HeartProvider } from "./contexts/HeartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

// Pages
import { AboutPage, CartPage, HomePage, ShopPage, TestPage } from "./pages";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Sections/Footer";
import { ToastContainer, toast } from 'react-toastify';

// Styles
import GlobalStyle from "./styles/GlobalStyle";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    newSocket.on('recieve-likes', (msg) => toast(msg));
    return () => newSocket.close();
  }, [setSocket]);

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
      <ToastContainer position="bottom-left" progressStyle={{background : "#B6ADA7"}}/>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
