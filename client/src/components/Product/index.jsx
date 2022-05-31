import "./Pruduct.css";
import ArrowBtn from "../ArrowBtn";
// backgroundImage: `url(${props.product.images.display[1]})`

const Index = (props) => {
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
          <button className="like-btn">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <tr></tr>
        <sbr />
        <ArrowBtn content={"Add To Cart"} onClick={() => props.onCart} />
      </div>
    </div>
  );
};

export default Index;
