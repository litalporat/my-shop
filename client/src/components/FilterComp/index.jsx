import React, { useState } from "react";
import "./FilterComp.css";
import { Slider } from "@mui/material";
import BasicButton from "../Buttons/BasicBtn";
import SideBarBtn from "../Buttons/SideBarBtn";

const FilterComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState([100, 900]);

  const updateRange = (e, data) => {
    setValue(data);
    props.filterByPrice(value);
  };

  isOpen &&
    document.addEventListener("click", (e) => {
      if (e.target.className == "filter-box") setIsOpen(!isOpen);
    });

  const options = [
    // {
    //   title: "Sizes",
    //   param: "stock",
    //   values: ["XS", "S", "M", "L", "XL", "One-Size"],
    // },
    {
      title: "Colors",
      param: "color",
      values: ["Blue", "Red", "Green", "Black", "Pink", "White"],
    },
  ];

  const checkValue = (e) => {
    if (e.target.checked) props.filterFunc(e.target.id, e.target.value);
    else props.delFilterFunc(e.target.id, e.target.value);
  };

  return (
    <SideBarBtn title={"Filters"} button={<BasicButton title={"Filters"} />}>
      <>
        <h3>Price</h3>
        <Slider
          value={value}
          onChange={updateRange}
          valueLabelDisplay="auto"
          max={1000}
          step={10}
        />

        <hr />

        {options.map((obj) => (
          <span key={obj.title}>
            <h3> {obj.title} </h3>
            {obj.values.map((val) => (
              <span key={obj.param}>
                <label className="check-cont">
                  <input
                    type="checkbox"
                    onChange={checkValue}
                    value={val}
                    id={obj.param}
                  />
                  {val}
                  <span className="checkmark"></span>
                </label>
              </span>
            ))}
            <hr />
          </span>
        ))}
      </>
    </SideBarBtn>
  );
};

export default FilterComp;
