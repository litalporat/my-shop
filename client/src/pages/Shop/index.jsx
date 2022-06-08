import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Product";
import Popup from "../../components/PopUp";
import axios from "axios";
import "./Shop.css";
import CartContext from "../../Contexts/CartContext";
import FilterComp from "../../components/FilterComp";
import SorterComp from "../../components/SorterComp";
import BasicButton from "../../components/Buttons/BasicBtn";
import HeartContext from "../../Contexts/HeartContext";

const ProductPage = (props) => {
  //States
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const [data, setData] = useState();
  const [viewData, setViewData] = useState();
  const [activeFilters, setFilters] = useState({});

  //Context
  const { addProduct } = useContext(CartContext);
  const { hearts } = useContext(HeartContext);

  // Getting the data from the DB.
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(function (response) {
        // handle success
        setData(response.data);
        setViewData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

<<<<<<< HEAD
=======
  console.log(data);

>>>>>>> 5aaee44b87298379e0b000b2ddfe97eb2f6415d7
  // Filtering the data
  useEffect(() => {
    if (data) {
      let tempData = [...data];
      let newData = [];
      let filteredData = [];
<<<<<<< HEAD
      console.log(activeFilters);
      Object.keys(activeFilters).map((key, index) => {
        activeFilters[key].forEach((value) => {
          newData.push(
            tempData.filter((prod) => prod[key].includes(value))
          );
        });
      });
      if (newData.length > 0) {
        newData.forEach((e) =>
          e.forEach((d) => filteredData.push(d))
        );
=======
      console.log(filters);
      Object.keys(filters).map((key, index) => {
        filters[key].forEach((value) => {
          newData.push(tempData.filter((prod) => prod[key].includes(value)));
        });
      });
      if (newData.length > 0) {
        newData.forEach((e) => e.forEach((d) => filteredData.push(d)));
>>>>>>> 5aaee44b87298379e0b000b2ddfe97eb2f6415d7
        setViewData(filteredData);
      } else {
        setViewData(tempData);
      }
<<<<<<< HEAD
    }
  }, [activeFilters]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const changeContent = (product) => {
    setcontent(product);
  };
  const filterByParam = (param, value) => {
    let newFilters = { ...activeFilters };
    if (!newFilters[param]) newFilters[param] = [];
    newFilters[param].push(value);
    setFilters(newFilters);
  };
  const deletefilterByParam = (param, value) => {
    let newFilters = { ...activeFilters };
    newFilters[param] = newFilters[param].filter((e) => e != value);
    setFilters(newFilters);
  };
  const filterByPrice = (value) => {
    let tempData = [...data];
    tempData = tempData.filter(
      (product) =>
        product.price >= value[0] && product.price <= value[1]
    );
    setViewData(tempData);
  };
  const sortByInt = (param, order) => {
    if (order === "Default") {
      let tempData = [...data];
      setViewData(tempData);
    }
=======
    }
  }, [filters]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const changeContent = (product) => {
    setcontent(product);
  };
  const filterByParam = (param, value) => {
    let newFilters = { ...filters };
    if (!newFilters[param]) newFilters[param] = [];
    newFilters[param].push(value);
    setFilters(newFilters);
  };
  const deletefilterByParam = (param, value) => {
    let newFilters = { ...filters };
    newFilters[param] = newFilters[param].filter((e) => e != value);
    setFilters(newFilters);
  };
  const filterByPrice = (value) => {
    let tempData = [...data];
    tempData = tempData.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setViewData(tempData);
  };
  const sortByInt = (param, order) => {
    if (order === "Default") {
      let tempData = [...data];
      setViewData(tempData);
    }
>>>>>>> 5aaee44b87298379e0b000b2ddfe97eb2f6415d7
    if (order === "High To Low") {
      let tempData = [...viewData];
      tempData = tempData.sort((a, b) => a[param] - b[param]);
      setViewData(tempData);
    }
    if (order === "Low To High") {
      let tempData = [...viewData];
      tempData = tempData.sort((a, b) => b[param] - a[param]);
      setViewData(tempData);
    }
  };
  const sortByString = (param, order) => {
    let tempData = [...data];
    if (order === "Default") {
      setViewData(tempData);
    }
    if (order === "High To Low") {
      tempData = tempData.sort((a, b) =>
        a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0
      );
      setViewData(tempData);
    }
    if (order === "Low To High") {
      tempData = tempData.sort((a, b) =>
        a[param] < b[param] ? 1 : b[param] < a[param] ? -1 : 0
      );
      setViewData(tempData);
    }
  };

  return (
    <div className="shop-body">
      <div className="filters">
        <FilterComp
          filterFunc={filterByParam}
          delFilterFunc={deletefilterByParam}
          filterByPrice={filterByPrice}
        />
<<<<<<< HEAD
        <BasicButton
          title={`Number Of Products: ${data && viewData.length}`}
        />
        <SorterComp
          sortByInt={sortByInt}
          sortByString={sortByString}
        />
=======
        <BasicButton title={`Number Of Products: ${data && viewData.length}`} />
        <SorterComp sortByInt={sortByInt} sortByString={sortByString} />
>>>>>>> 5aaee44b87298379e0b000b2ddfe97eb2f6415d7
      </div>
      <div className="shop-list">
        {data &&
          viewData.map((product) => (
            <Product
              product={product}
              onClick={() => {
                changeContent(product);
                togglePopup();
              }}
              onCart={() => addProduct(product)}
            />
          ))}
<<<<<<< HEAD
        {isOpen && (
          <Popup content={content} handleClose={togglePopup} />
        )}
=======
        {isOpen && <Popup content={content} handleClose={togglePopup} />}
>>>>>>> 5aaee44b87298379e0b000b2ddfe97eb2f6415d7
      </div>
    </div>
  );
};

export default ProductPage;
