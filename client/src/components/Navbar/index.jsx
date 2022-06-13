import { Link } from "react-router-dom";
import DropDown from "../Buttons/MenuBtn";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import SideBarBtn from "../Buttons/SideBarBtn";
import IconBtn from "../Buttons/IconBtn";
import CartProduct from "../ProductView/ListViewProduct";
import BasicButton from "../Buttons/BasicBtn";
import LikeList from "../Lists/LikeList";
import ListCartProduct from "../Lists/CartList";
<<<<<<< HEAD
import LoginPopup from "../LoginPopUp";
=======
import CurrenctSelect from "../CurrencySelector";
>>>>>>> 182985b8548e607fa7d375e5b08603b3b387170b

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [navbar, setNavBar] = useState("navbar");
  const [isLogin, setIsLogin] = useState(false);

  window.onwheel = (e) => {
    if (e.deltaY > 0) setNavBar("navbar down");
    if (e.deltaY < 0) setNavBar("navbar up");
    if (e.x >= 920) setNavBar("navbar");
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
            <CurrenctSelect />
          </li>
          <li>
            <SideBarBtn
              title={"test"}
              side={"right"}
              button={
                <IconBtn type={"secondary"}>
                  <i className="fas fa-heart"></i>
                </IconBtn>
              }
            >
              <LikeList />
            </SideBarBtn>
          </li>
          <li>
            <SideBarBtn
              title={"Cart"}
              side={"right"}
              button={
                <BasicButton
                  title={"Cart"}
                  type={"secondary"}
                  icon={<i className="fas fa-shopping-cart"></i>}
                >
                  <span className="cartlogo__badge">{products.length}</span>
                </BasicButton>
              }
            >
              <ListCartProduct />
            </SideBarBtn>
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
    </div>
  );
};

export default Navbar;
