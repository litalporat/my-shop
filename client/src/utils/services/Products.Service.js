import axiosinstance from '../api/axios'

async function fetchProducts() {
  return axiosinstance
    .get("/api/categories")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default fetchProducts;