import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import Login from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route path ="/login" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route exact path="/" element={<MainDash />} />
              <Route exact path="/analytics" element={<Analytics />} />
              {/* <Route exact path="/customers" element={<Customers />} /> */}
              <Route exact path="/locations" element={<Locations />} />
              <Route exact path="/products" element={<Products />} />
              <Route path='*' component={()=> "404 NOT FOUND"}/>
            </Route>
          </Routes>
          <RightSide />
        </div>
      </div>
  );
}

export default App;
