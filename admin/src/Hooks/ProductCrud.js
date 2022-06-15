import axios from "axios";

const updateProduct = () => {
  const product = {
    displayName: "test",
    description: "a short description",
    price: 345,
    imgDisplay: 123,
    imgDetails: "123",
    stock: { s: "15", m: "50" },
    color: ["blue"],
    discount: 150,
    type: "shirt",
    amountSold: 0,
  };
  axios.post(`http://localhost:5000/api/products/`, product);
};

// const postProduct = (product) => {
//     axios
//     .post(`http://localhost:5000/api/products`,product)
// }
const deleteProduct = async () => {
  await axios.delete(
    `http://localhost:5000/api/products/:62aa306206ce83cd6d0f7d8e`
  );
};

export default deleteProduct;
