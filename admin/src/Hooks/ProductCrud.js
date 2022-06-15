import axios from "axios";

const updateProduct = () => {
  const product = {
    id: "62a8fcf1e12a0casdasddsa6d07",
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

export default updateProduct;
