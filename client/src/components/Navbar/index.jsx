import { Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import RightPopUp from "../RightPopUp";

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const wishlistPop = () => {
    setIsLikeOpen(!isLikeOpen);
  };

  const cartPop = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>My Shop</h2>
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
          <li>
              <Link to="/test">
                  Test
              </Link>
          </li>
        </ul>
        <ul className="navbar__links">
          <li>
            <i className="fas fa-heart heart-logo" onClick={wishlistPop}></i>
          </li>
          <li>
            <i className="cart__link" onClick={cartPop}>
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="cartlogo__badge">{products.length}</span>
            </i>
          </li>
        </ul>
      </nav>
      {isLikeOpen && <RightPopUp content="wishlist" onClick={wishlistPop} />}
      {isCartOpen && <RightPopUp content="cart" onClick={cartPop} />}
    </div>
  );
};

export default Navbar;
