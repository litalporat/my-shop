import "./Product.css";
import ArrowBtn from "../Buttons/ArrowBtn";
import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";
import IconBtn from "../Buttons/IconBtn";

const Index = (props) => {
  const { handleHearts, include } = useContext(HeartContext);
  return (
    <div className="container">
      <span
        className="image-span"
        style={{
          backgroundImage: `url(${props.product.images.display[0]})`,
        }}
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
          <IconBtn
            onClick={() => handleHearts(props.product)}
          >
            <i
              className={
                include(props.product)
                  ? "fas fa-heart heart-selected"
                  : "fas fa-heart"
              }
            ></i>
          </IconBtn>
        </div>
        <tr></tr>
        <sbr />
        <ArrowBtn content={"add to cart"} onClick={props.onCart} />
      </div>
    </div>
  );
};

export default Index;
