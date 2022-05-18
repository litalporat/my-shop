import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Screens
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import ShoesPage from './pages/ShoesPage'

// Components
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar/>
            <main>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    {/* <Route exact path="/product/:id" element={<ProductPage/>}/> */}
                    <Route exact path="/cart" element={<CartPage/>} />
                    <Route exact path="/shop" element={<ShopPage/>} />
                    <Route exact path="/shoes" element={<ShoesPage/>} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
