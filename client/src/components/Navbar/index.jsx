import { Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import { MenuBtn, SideBarBtn, IconBtn, BasicBtn } from "../Buttons";
import {LikeList,CartList} from "../Lists";
import styled from "styled-components";

const BtnsDiv = styled.div`
display: flex;
  flex-direction:row;
  align-items: center;
  gap:10px;
`

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
            <MenuBtn
              title={"Shop"}
              sidetitles={["Tops", "Jeans", "Dresses"]}
            />
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <BtnsDiv>
        <IconBtn type={"secondary"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </IconBtn>
          <SideBarBtn
            title={"Notification"}
            side={"right"}
            button={
              <IconBtn type={"secondary"}>
                <i className="fa-solid fa-bell"></i>
              </IconBtn>
            }
          >
            {/* Notification List */}
          </SideBarBtn>
          <SideBarBtn
            title={"Likes"}
            side={"right"}
            button={
              <IconBtn type={"secondary"}>
                <i className="fas fa-heart"></i>
              </IconBtn>
            }
          >
            <LikeList />
          </SideBarBtn>
          <SideBarBtn
            title={"Cart"}
            side={"right"}
            button={
              <BasicBtn
                title={"Cart"}
                type={"secondary"}
                icon={<i className="fas fa-shopping-cart"></i>}
              >
                <span className="cartlogo__badge">
                  {products.length}
                </span>
              </BasicBtn>
            }
          >
            <CartList />
          </SideBarBtn>
        </BtnsDiv>
      </nav>
    </div>
  );
};

export default Navbar;
