const ListProduct = (props) => {
  console.log(props.product);

  return (
    <div className="liked-list">
      <img src={props.product.images.display[0]} className="list-image" />
      <p>{props.product.displayName}</p>
    </div>
  );
};

export default ListProduct;
