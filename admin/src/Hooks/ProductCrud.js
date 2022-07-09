import axios from "axios";


//Nimi: I've added authorization lock on every function
const createProduct = (product) => {
//   axios.post(`http://localhost:5000/api/products/`, product,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("key")}`,
    //     },
    //   });
};

// const postProduct = (product) => {
//     axios
//     .post(`http://localhost:5000/api/products`,product,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("key")}`,
    //     },
    //   })
// }
const deleteProduct = async (id) => {
//   await axios.delete(`http://localhost:5000/api/products/${id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("key")}`,
    //     },
    //   });
};

export default deleteProduct;
