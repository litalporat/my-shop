import React, { useState } from "react";
import { ButtonBasic } from "../../Buttons";

const SorterComp = (props) => {
  const [sort, setSort] = useState([
    { title: "Price", order: "Default", param: "price" },
  ]);

  const sortChange = (param, order) => {
    let tempSort = [...sort];
    switch (order) {
      case "Default":
        tempSort.find((a) => a.param === param).order = "High To Low";
        setSort(tempSort);
        break;
      case "High To Low":
        tempSort.find((a) => a.param === param).order = "Low To High";
        setSort(tempSort);
        break;
      case "Low To High":
        tempSort.find((a) => a.param === param).order = "Default";
        setSort(tempSort);
        break;
    }
    props.sortByInt(param, order);
    props.sortByString(param, order);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {sort.map((obj) => (
        <ButtonBasic
          key={obj.title}
          title={`Sort By ${obj.title}: ${obj.order}`}
          onClick={() => sortChange(obj.param, obj.order)}
        />
      ))}
    </div>
  );
};

export default SorterComp;
