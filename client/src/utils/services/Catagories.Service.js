import axiosinstance from '../api/axios'

async function fetchCatagories() {
  return axiosinstance
    .get("/api/categories")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default fetchCatagories;