import React from "react";

export default function CurrenctSelect(props) {
  return (
    <div>
      <select onChange={(e) => props.onClick(e.target.value)}>
        <option>{props.base}</option>
        {props.rates &&
          Object.keys(props.rates).map((elem) => (
            <option value={elem}>{elem}</option>
          ))}
      </select>
    </div>
  );
}
