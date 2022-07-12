import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import { Analytics, Locations, Login, Orders, Products } from "./pages";

//Components
import MainDash from "./components/MainDash/MainDash";
import ProtectedRoute from "./auth/ProtectedRoutes";

//Styles

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<MainDash />} />
            <Route exact path="/analytics" element={<Analytics />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/locations" element={<Locations />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
