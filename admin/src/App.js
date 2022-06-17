import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Locations from "./pages/Locations";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<MainDash />} />
            <Route exact path="/analytics" element={<Analytics />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/locations" element={<Locations />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
