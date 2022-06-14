import { Link } from "react-router-dom";
import DropDown from "../Buttons/MenuBtn";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import SideBarBtn from "../Buttons/SideBarBtn";
import IconBtn from "../Buttons/IconBtn";
import BasicButton from "../Buttons/BasicBtn";
import LikeList from "../Lists/LikeList";
import ListCartProduct from "../Lists/CartList";
import Login from "../../Login";
import { PopupBtn } from "../Buttons";
import { BasicBtn } from "../Buttons";
import CurrenctSelect from "../CurrencySelector";

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [navbar, setNavBar] = useState("navbar");
  const [isLogin, setIsLogin] = useState(false);
  const [loginTitle, setLoginTitle] = useState("Login");

  window.onwheel = (e) => {
    if (e.deltaY > 0) setNavBar("navbar down");
    if (e.deltaY < 0) setNavBar("navbar up");
    if (e.x >= 920) setNavBar("navbar");
  };

  //Test
  useEffect(() => {
    if (localStorage.getItem("key")) {
      console.log("Im holding a key");
      setLoginTitle("Logout");
    }
  }, []);

  // useEffect(() => {
  //   console.log("UE: login");
  //   loginTitle === "Login" ? setLoginTitle("Logout") : setLoginTitle("Login");
  // }, [isLogin]);

  return (
    <div>
      <nav className={navbar}>
        <Link to="/">
          <h2 style={{ textDecoration: "none" }}>My Shop</h2>
        </Link>
        <ul className="navbar__links">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/About">About</Link>
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
            <PopupBtn
              title={"Login"}
              size={"S"}
              button={<BasicBtn title={loginTitle} type={"secondary"} />}
            >
              <Login />
            </PopupBtn>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
