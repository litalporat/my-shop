import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import { PageAnalytics, PageLocations, PageLogin, PageOrders, PageDashboard, PageProducts } from "./pages";

//Components
import ProtectedRoute from "./auth/ProtectedRoutes";
import GlobalStyle from "./styles/GlobalStyle";

//Styles

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <div />
                <PageLogin />
              </>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<PageDashboard />} />
            <Route exact path="/analytics" element={<PageAnalytics />} />
            <Route exact path="/orders" element={<PageOrders />} />
            <Route exact path="/locations" element={<PageLocations />} />
            <Route exact path="/products" element={<PageProducts />} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Route>
        </Routes>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
