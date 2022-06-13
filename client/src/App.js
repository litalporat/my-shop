import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
// Screens
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import CartPage from './pages/Cart'
import TestPage from './pages/Test'

// Components
import Navbar from "./components/Navbar";
import Footer from './components/Sections/Footer';
import { useState } from "react";
import { CartProvider } from "./Contexts/CartContext";
import { HeartProvider } from "./Contexts/HeartContext";

function App() {
    return (
        <Router>
            {/* <main className = "App">
                <Register />
            </main> */}
            <Navbar/>
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/" element={<HomePage/>}/>
                    {/* <Route exact path="/product/:id" element={<ProductPage/>}/> */}
                    <Route exact path="/cart" element={<CartPage/>} />
                    <Route exact path="/shop" element={<ShopPage/>} />
                    <Route exact path="/test" element={<TestPage/>} />
                </Routes>
        </Router>
    );
}

export default App;
