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
    <CurrencyContext.Provider value={{ currency }}>
      {children}
      <CurrenctSelect
        base={currency}
        options={rates}
        onClick={changeCurrency}
      />
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
