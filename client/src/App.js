import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Screens
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import CartPage from './pages/CartPage'
import TestPage from './pages/Test'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Sections/Footer';

function App() {
    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    {/* <Route exact path="/product/:id" element={<ProductPage/>}/> */}
                    <Route exact path="/cart" element={<CartPage/>} />
                    <Route exact path="/shop" element={<ShopPage/>} />
                    <Route exact path="/test" element={<TestPage/>} />
                </Routes>
                <Footer/>
        </Router>
    );
}

export default App;
