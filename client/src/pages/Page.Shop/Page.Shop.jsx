import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Componentes
import BasicButton from '../../components/Buttons/Button.Basic/Button.Basic';
import FilterComp from '../../components/FilterComp/index';
import SorterComp from '../../components/Functions/FuncComps/SorterComp';
import { ProductCard } from '../../components/ProductView';
import CartContext from '../../contexts/CartContext';

//Styles
import {
  FitlersStyle,
  RowFlex,
  ShopList,
  ShopPageBody,
} from './Page.Shop.Styled';

const ShopPage = ({ socket }) => {
  const [data, setData] = useState();
  const [viewData, setViewData] = useState();
  const [filters, setFilters] = useState({});
  const [colorData, setColorData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  const { addProduct } = useContext(CartContext);
  const location = useLocation();

  // Getting the data from the DB.
  useEffect(() => {
    const path = location.search
      ? `http://localhost:5000/api/products${location.search}`
      : 'http://localhost:5000/api/products';
    axios
      .get(path)
      .then(function (response) {
        // handle success
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
    if (location?.search.includes('search'))
      return decodeURI(location?.search.split('search=')[1].toLowerCase());
    else return false;
  };

  // Filtering the data
  useEffect(() => {
    if (data) {
      let tempData = [...data];
      let newData = [];
      let filteredData = [];
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
    if (order === 'Default') {
      let tempData = [...data];
      setViewData(tempData);
    }
    if (order === 'High To Low') {
      let tempData = [...viewData];
      tempData = tempData.sort((a, b) => a[param] - b[param]);
      setViewData(tempData);
    }
    if (order === 'Low To High') {
      let tempData = [...viewData];
      tempData = tempData.sort((a, b) => b[param] - a[param]);
      setViewData(tempData);
    }
  };

  const sortByString = (param, order) => {
    let tempData = [...data];
    if (order === 'Default') {
      setViewData(tempData);
    }
    if (order === 'High To Low') {
      tempData = tempData.sort((a, b) =>
        a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0
      );
      setViewData(tempData);
    }
    if (order === 'Low To High') {
      tempData = tempData.sort((a, b) =>
        a[param] < b[param] ? 1 : b[param] < a[param] ? -1 : 0
      );
      setViewData(tempData);
    }
  };

  return (
    <ShopPageBody>
      <FitlersStyle>
        <RowFlex>
          <FilterComp
            filterFunc={filterByParam}
            delFilterFunc={deletefilterByParam}
            filterByPrice={filterByPrice}
          />
          <SorterComp sortByInt={sortByInt} sortByString={sortByString} />
        </RowFlex>
        <BasicButton title={`Number Of Products: ${data && viewData.length}`} />
      </FitlersStyle>
      <ShopList>
        {data &&
          viewData.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              socket={socket}
              onCart={addProduct}
            />
          ))}
      </ShopList>
    </ShopPageBody>
  );
};

export default ShopPage;
