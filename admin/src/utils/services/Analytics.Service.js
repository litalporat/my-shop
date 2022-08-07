import axiosinstance from '../../api/axios'

async function fetchStockByType() {
  return axiosinstance
    .get("/api/analytics/stock")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchSalesByCountry() {
  return axiosinstance
    .get("/api/analytics/countries")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export {fetchStockByType,fetchSalesByCountry};
