import axios from "axios";
import { createContext, useEffect, useState } from "react";
import CurrenctSelect from "../components/CurrencySelector";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("ILS");
  const [rates, setRates] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/currency")
      .then((response) => {
        const temp = Object.assign({}, response.data);
        delete temp["id"];
        delete temp["_id"];
        delete temp["_v"];
        setRates(temp);
        console.log(temp);
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
    <CurrencyContext.Provider value={{ currency, rates, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
