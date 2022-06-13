import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { HeartProvider } from "../../Contexts/HeartContext";

export default function CurrenctSelect() {
  const [currency, setCurrency] = useState("ILS");
  const [rates, setRates] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=ILS&apikey=7ahTq1dAWtfksYdqHvCGhVFLqB38tlm7"
      )
      .then((response) => {
        setRates(response.data.rates);
        console.log(response.data.rates);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changeCurrency = (curr) => {
    setCurrency(curr);
    console.log(currency);
  };

  return (
    <div>
      <select onChange={(e) => changeCurrency(e.target.value)}>
        <option>{currency}</option>
        {rates &&
          Object.keys(rates).map((elem) => (
            <option value={elem}>{elem}</option>
          ))}
      </select>
    </div>
  );
}
