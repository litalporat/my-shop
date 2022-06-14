import axios from "axios";
import { createContext, useEffect, useState } from "react";
import CurrenctSelect from "../components/CurrencySelector";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("ILS");
  const [rates, setRates] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=ILS&apikey=ukMiirom5OS9DyElGj4MJu7lqBsROMpw"
      )
      .then((response) => {
        setRates(response.data.rates);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changeCurrency = (curr) => {
    setCurrency(curr);
  };

  return (
    <CurrencyContext.Provider value={{ currency, rates, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
