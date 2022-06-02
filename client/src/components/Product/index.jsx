import './Pruduct.css'
import ArrowBtn from '../ArrowBtn'
// backgroundImage: `url(${props.product.images.display[1]})`
import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";

const Index = (props) => {
  const { handleHearts, include } = useContext(HeartContext);
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
          </button>
        </div>
        <tr></tr>
        <sbr />
        <ArrowBtn text={props.text} onClick={props.onCart} />
      </div>
    </div>
  );
};

export default Index;
