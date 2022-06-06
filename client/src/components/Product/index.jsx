<<<<<<< HEAD
import "./Product.css";
import ArrowBtn from "../ArrowBtn";
import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";

const Index = (props) => {
  const { handleHearts, include } = useContext(HeartContext);
=======
import "./Pruduct.css";
import ArrowBtn from "../ArrowBtn";
// backgroundImage: `url(${props.product.images.display[1]})`

const Index = (props) => {
>>>>>>> 38e9f2ef42c2a6888c2377c445f842e86ef4db99
  return (
    <div className="container">
      <span
        className="image-span"
        style={{ backgroundImage: `url(${props.product.images.display[0]})` }}
        onMouseOver={(e) =>
          (e.target.style.backgroundImage = `url(${props.product.images.display[1]})`)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundImage = `url(${props.product.images.display[0]})`)
        }
      />
      <div className="product-body">
        <div className="flex-row">
          <button className="view-btn" onClick={props.onClick}>
            {" "}
            View{" "}
          </button>
          <center>
            <div className="title"> {props.product.displayName} </div>
            <div className="price"> {props.product.price} ₪ </div>
          </center>
<<<<<<< HEAD
          <button
            className="like-btn"
            onClick={() => handleHearts(props.product)}
          >
            <i
              className={
                include(props.product)
                  ? "fas fa-heart heart-selected"
                  : "fas fa-heart"
              }
            ></i>
=======
          <button className="like-btn">
            <i className="fas fa-heart"></i>
>>>>>>> 38e9f2ef42c2a6888c2377c445f842e86ef4db99
          </button>
        </div>
        <tr></tr>
        <sbr />
<<<<<<< HEAD
        <ArrowBtn text={props.text} onClick={props.onCart} />
=======
        <ArrowBtn content={"Add To Cart"} />
>>>>>>> 38e9f2ef42c2a6888c2377c445f842e86ef4db99
      </div>
    </div>
  );
};

export default Index;
