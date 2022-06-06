<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 38e9f2e (Fixed filters and price slider)
import Product from "../../components/Product";
import Popup from "../../components/PopUp";
import axios from "axios";
import "./Shop.css";
<<<<<<< HEAD
import CartContext from "../../Contexts/CartContext";
import FilterComp from '../../components/FilterComp';
import SorterComp from '../../components/SorterComp';
import BasicButton from "../../components/Buttons/BasicBtn";
import HeartContext from "../../Contexts/HeartContext";

const ProductPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const [data, setData] = useState();
  const [viewData, setViewData] = useState()
  const [filters, setFilters] = useState({})
  const { addProduct } = useContext(CartContext);
  const { hearts } = useContext(HeartContext);
=======
import FilterComp from "../../components/FilterComp";
import SorterComp from "../../components/SorterComp";
import BasicButton from "../../components/BasicButton";

const catagories = ["Dresses", "Tops", "Shirts"];

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const [data, setData] = useState();
  const [viewData, setViewData] = useState();
  const [filters, setFilters] = useState({});
  const [colorData, setColorData] = useState([]);
  const [priceData, setPriceData] = useState([]);
>>>>>>> 38e9f2e (Fixed filters and price slider)

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
    // setColorData(...data);
  }, []);
  // Filtering the data
  useEffect(() => {
    if (data) {
      let tempData = [...data];
      let newData = [];
      let filteredData = [];
      console.log(filters);
      Object.keys(filters).map((key, index) => {
        filters[key].forEach((value) => {
          newData.push(tempData.filter((prod) => prod[key].includes(value)));
        });
<<<<<<< HEAD
    },[])
    // Filtering the data
    useEffect(()=>{
        if(data){
            let tempData = [...data]
            let newData = []
            let filteredData = []
            console.log(filters)
            Object.keys(filters).map((key,index) =>{
                filters[key].forEach(value =>{
                    newData.push( tempData.filter(prod => prod[key].includes(value)) )
                })
            })
            if(newData.length>0){
                newData.forEach(e=> e.forEach(d=>filteredData.push(d)))
                setViewData(filteredData)
            }
            else {
                setViewData(tempData)
            }
        }

    },[filters])
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const changeContent = (product) => {
      setcontent(product)
    }
    const filterByParam = (param,value) => {
        let newFilters = {...filters}
        if(!newFilters[param])
            newFilters[param] = []
        newFilters[param].push(value)
        setFilters(newFilters)

    }
    const deletefilterByParam = (param,value) => {
        let newFilters = {...filters}
        newFilters[param] = newFilters[param].filter(e=>e!=value)
        setFilters(newFilters)
    }
    const filterByPrice = (value) => {
        let tempData = [...data]
        tempData = tempData.filter(product => product.price>=value[0] && product.price<=value[1])
        setViewData(tempData)
    }
    const sortByInt = (param,order) => {
        if(order === "Default"){
            let tempData = [...data]
            setViewData(tempData)
        }
        if(order === "High To Low"){
            let tempData = [...viewData]
            tempData = tempData.sort((a,b)=> a[param] - b[param])
            setViewData(tempData)
        }
        if(order === "Low To High"){
            let tempData = [...viewData]
            tempData = tempData.sort((a,b)=> b[param] - a[param])
            setViewData(tempData)
        }
    }
    const sortByString = (param,order) => {
        let tempData = [...data]
        if(order === "Default"){
            setViewData(tempData)
        }
        if(order === "High To Low"){
            tempData = tempData.sort((a,b) => (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0))
            setViewData(tempData)
        }
        if(order === "Low To High"){
            tempData = tempData.sort((a,b)=> (a[param] < b[param]) ? 1 : ((b[param] < a[param]) ? -1 : 0))
            setViewData(tempData)
        }
=======
      });
      if (newData.length > 0) {
        newData.forEach((e) => e.forEach((d) => filteredData.push(d)));
        setColorData(filteredData);
        // setViewData(filteredData);
      } else {
        setColorData(tempData);
        // setViewData(tempData);
      }
>>>>>>> 38e9f2e (Fixed filters and price slider)
    }
  }, [filters]);

<<<<<<< HEAD
    return (
        <div className='shop-body'>
        <div className="filters">
        <FilterComp
        filterFunc={filterByParam}
        delFilterFunc={deletefilterByParam}
        filterByPrice={filterByPrice}
        />
        <BasicButton
        title={`Number Of Products: ${data && viewData.length}`}
        />
        <SorterComp
        sortByInt={sortByInt}
        sortByString={sortByString}
        />
        </div>
        <div className='shop-list'>
            {
                data && viewData.map(product =>(
                    <Product
                    product={product}
                    onClick={()=> {changeContent(product);togglePopup()}}
                    onCart={() => addProduct(product)}
                    />
                    ))
            }
            {
                isOpen && <Popup
                content={content}
                handleClose={togglePopup}
                />
            }
        </div>
        </div>
=======
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
>>>>>>> 38e9f2e (Fixed filters and price slider)
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
    <>
      <div className="filters">
        <FilterComp
          filterFunc={filterByParam}
          delFilterFunc={deletefilterByParam}
          filterByPrice={filterByPrice}
        />
        <BasicButton title={`Number Of Products: ${data && viewData.length}`} />
        <SorterComp sortByInt={sortByInt} sortByString={sortByString} />
      </div>
      <div className="shop-body">
        {data &&
          viewData.map((product) => (
            <Product
              product={product}
              onClick={() => {
                changeContent(product);
                togglePopup();
              }}
            />
          ))}
        {isOpen && <Popup content={content} handleClose={togglePopup} />}
      </div>
    </>
  );
};

export default ProductPage;
