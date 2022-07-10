import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import { Analytics, Locations, Login, Orders, Products } from "./pages";

//Components
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./auth/ProtectedRoutes";

//Styles
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
            <Sidebar />
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
            <RightSide />
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
