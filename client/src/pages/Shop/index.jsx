import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/ProductView/CardView";
import Popup from "../../components/PopUp";
import axios from "axios";
import "./Shop.css";
import CartContext from "../../Contexts/CartContext";
import FilterComp from "../../components/FilterComp";
import SorterComp from "../../components/SorterComp";
import BasicButton from "../../components/Buttons/BasicBtn";
import HeartContext from "../../Contexts/HeartContext";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductPage = (props) => {
  //States
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const [data, setData] = useState();
  const [viewData, setViewData] = useState();
  const [filters, setFilters] = useState({});
  const [colorData, setColorData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  //Context
  const { addProduct } = useContext(CartContext);
  const { hearts } = useContext(HeartContext);
  const location = useLocation();

  // Getting the data from the DB.
  useEffect(() => {
    const path = location.search
      ? `http://localhost:5000/api/products${location.search}`
      : "http://localhost:5000/api/products";
    axios
      .get(path)
      .then(function (response) {
        // handle success
        console.log(searchItem());
        setData(response.data);
        searchItem()
          ? setViewData(
              response.data.filter((item) =>
                item.displayName.toLowerCase().includes(searchItem())
              )
            )
          : setViewData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [location]);

  const searchItem = () => {
    return decodeURI(location?.search.split("search=")[1].toLowerCase());
  };

  // Filtering the data
  useEffect(() => {
    if (data) {
      let tempData = [...data];
      let newData = [];
      let filteredData = [];
      // console.log(filters);
      Object.keys(filters).map((key, index) => {
        filters[key].forEach((value) => {
          newData.push(tempData.filter((prod) => prod[key].includes(value)));
        });
      });
      if (newData.length > 0) {
        newData.forEach((e) => e.forEach((d) => filteredData.push(d)));
        setColorData(filteredData);
        // setViewData(filteredData);
      } else {
        setColorData(tempData);
        // setViewData(tempData);
      }
    }
  }, [filters]);

  // Sets the view if color filter or price range changes
  useEffect(() => {
    if (priceData.length != 0 && colorData.length != 0)
      setViewData(colorData.filter((x) => priceData.includes(x)));
    else if (colorData.length != 0) setViewData(colorData);
    else setViewData(priceData);
  }, [colorData, priceData]);

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
    setPriceData(tempData);
  };

  const sortByInt = (param, order) => {
    if (order === "Default") {
      let tempData = [...data];
      setViewData(tempData);
    }
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
        {/* {console.log(location.search)} */}
        <FilterComp
          filterFunc={filterByParam}
          delFilterFunc={deletefilterByParam}
          filterByPrice={filterByPrice}
        />
        <BasicButton title={`Number Of Products: ${data && viewData.length}`} />
        <SorterComp sortByInt={sortByInt} sortByString={sortByString} />
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
              onCart={addProduct}
            />
          ))}
        {isOpen && <Popup content={content} handleClose={togglePopup} />}
      </div>
    </div>
  );
};

export default ProductPage;
