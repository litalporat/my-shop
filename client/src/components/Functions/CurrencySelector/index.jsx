import React from "react";
import { useContext } from "react";
import CurrencyContext from "../../../Contexts/CurrencyContext";

export default function CurrenctSelect(props) {
  const { currency, rates, changeCurrency } = useContext(CurrencyContext);
  return (
    <div>
      <select onChange={(e) => changeCurrency(e.target.value)}>
        <option>{currency}</option>
        {rates &&
          Object.keys(rates).map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
      </select>
    </div>
  );
}
