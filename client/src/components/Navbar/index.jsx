import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import DropDown from "../Buttons/MenuBtn";
import LoginPopup from "../LoginPopUp";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import RightPopUp from "../RightPopUp";

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navbar, setNavBar] = useState("navbar");

  window.onwheel = (e) => {
    console.log(e);
    if (e.deltaY > 0) setNavBar("navbar down");
    if (e.deltaY < 0) setNavBar("navbar up");
    if (e.x >= 920) setNavBar("navbar");
  };

  const wishlistPop = () => {
    setIsLikeOpen(!isLikeOpen);
  };

  const cartPop = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className={navbar}>
        <h2>My Shop</h2>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <DropDown
              title={"Shop"}
              sidetitles={["Tops", "Jeans", "Dresses"]}
            />
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <ul className="navbar__links">
          <li>
            <i
              className="fas fa-heart heart-logo"
              onClick={wishlistPop}
            ></i>
          </li>
          <li>
            <i className="cart__link" onClick={cartPop}>
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="cartlogo__badge">
                {products.length}
              </span>
            </i>
          </li>
          <li>
=======
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
>>>>>>> 38e9f2ef42c2a6888c2377c445f842e86ef4db99
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
<<<<<<< HEAD
        </ul>
      </nav>
      {isLikeOpen && (
        <RightPopUp content="wishlist" onClick={wishlistPop} />
      )}
      {isCartOpen && <RightPopUp content="cart" onClick={cartPop} />}
    </div>
=======
      </ul>
    </nav>
>>>>>>> 38e9f2ef42c2a6888c2377c445f842e86ef4db99
  );
};

export default Navbar;
