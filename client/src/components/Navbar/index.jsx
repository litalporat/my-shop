import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../Buttons/MenuBtn";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavBar] = useState("navbar");

  window.onwheel = (e) => {
    console.log(e);
    if (e.deltaY > 0) setNavBar("navbar down");
    if (e.deltaY < 0) setNavBar("navbar up");
    if (e.x >= 920) setNavBar("navbar");
  };

  return (
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
          <Link className="cart__link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
