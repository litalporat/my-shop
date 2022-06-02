import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../LoginPopUp";
import "./Navbar.css";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h2 style={{ textDecoration: "none" }}>My Shop</h2>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <ul className="navbar__links">
        <li>
          <Link className="cart__link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <button
            className="profile_picture"
            onClick={() => {
              setIsLogin(!isLogin);
              togglePopup();
            }}
          >
            {isLogin ? "Profile" : "Login"}
          </button>
          <i class="fa-solid fa-user"></i>
          {isOpen && <LoginPopup onClick={togglePopup} />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
