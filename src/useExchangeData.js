import axios from "axios";
import { useState } from "react";

const [currenciesTable, setCurrenciesTable] = useState({
  state: "loading",
});

const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

export const useExchangeData = () => {
  (async () => {
    try {
      const response = await axios.get(apiUrl);
      setCurrenciesTable({
        state: "success",
        date: response.data.date,
        rates: response.data.rates,
      });
    } catch (error) {
      console.error("Something bad happened!", error);
    }
  })();
};