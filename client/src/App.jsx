import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client";

//Contexts
import { CartProvider } from "./contexts/CartContext";
import { HeartProvider } from "./contexts/HeartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

// Pages
import { PageAbout, PageCart, PageHome, PageShop } from "./pages";

// Components
import Navbar from "./components/Layouts/Navbar/Navbar";
import { SectionFooter } from "./components/Sections";
import { ToastContainer, toast } from "react-toastify";

// Styles
import GlobalStyle from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { OrderHistoryProvider } from "./contexts/OrderHistory";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5000`);
    setSocket(newSocket);
    newSocket.on("recieve-likes", (msg) => toast(msg));
    return () => newSocket.close();
  }, []);

  return (
    <Router>
      <CartProvider>
        <HeartProvider>
          <OrderHistoryProvider>
            <CurrencyProvider>
              <Navbar socket={socket} />
              <Routes>
                <Route exact path="/" element={<PageHome />} />
                <Route exact path="/cart" element={<PageCart />} />
                <Route path="/shop" element={<PageShop socket={socket} />} />
                <Route exact path="/about" element={<PageAbout />} />
              </Routes>
              <SectionFooter />
            </CurrencyProvider>
          </OrderHistoryProvider>
        </HeartProvider>
      </CartProvider>
      <ToastContainer
        position="bottom-left"
        progressStyle={{ background: "#B6ADA7" }}
      />
      <GlobalStyle />
    </Router>
  );
}

export default App;
