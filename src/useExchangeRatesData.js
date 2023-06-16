import axios from "axios";
import { useEffect, useState } from "react";



const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

const getExchangeRateTable = (ratesData) => Object.entries(ratesData).map(currency => ({
  name: currency[0],
  rate: currency[1]
}));

export const useExchangeRatesData = () => {
  const [exchangeRatesData, setExchengeRatesData] = useState({
    state: "loading"
  });
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl);
        const responseData = response.data;
        const exchangeRateTable = getExchangeRateTable(responseData.rates);
        
        setExchengeRatesData({
          state: "success",
          date: responseData.date,
          rates: exchangeRateTable
        });
      } catch (error) {
        setExchengeRatesData({
          state: `${error}`
        });
      }
    })();

    setTimeout(2000);
  }, []);

  return exchangeRatesData;
};
