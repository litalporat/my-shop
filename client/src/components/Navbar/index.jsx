import { Link } from "react-router-dom";
import DropDown from "../Buttons/MenuBtn";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import SideBarBtn from "../Buttons/SideBarBtn";
import IconBtn from "../Buttons/IconBtn";
import CartProduct from "../NewComp/ListViewProduct";
import BasicButton from "../Buttons/BasicBtn";
import LikeList from "../NewComp/LikeList";
import ListCartProduct from "../NewComp/CartList";

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [navbar, setNavBar] = useState("navbar");

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
            <SideBarBtn
              title={"test"}
              side={"right"}
              button={
                <IconBtn
                type={"secondary"}
                >
                  <i className="fas fa-heart"></i>
                </IconBtn>
              }
            >
              <LikeList/>
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
                  <span className="cartlogo__badge">
                    {products.length}
                  </span>
                </BasicButton>
              }
            >
              <ListCartProduct/>
            </SideBarBtn>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
