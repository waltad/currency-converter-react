import axios from "axios";
import { useEffect, useState } from "react";



const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

export const useExchangeData = () => {
  const [currenciesTable, setCurrenciesTable] = useState({
    state: "loading"
  });
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        
        setCurrenciesTable({
          state: "success",
          date: data.date,
          rates: data.rates
        });
      } catch (error) {
        setCurrenciesTable({
          state: `${error}`
        });
      }
    })();

    setTimeout(2000);
  }, [currenciesTable]);

  return currenciesTable;
};
