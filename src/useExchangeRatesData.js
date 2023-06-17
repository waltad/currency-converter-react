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
    const getExchangeRatesData = () => (async () => {
      try {
        const response = await axios.get(apiUrl);
        const { date, rates } = response.data;
        const exchangeRateTable = getExchangeRateTable(rates);

        setExchengeRatesData({
          state: "success",
          date: date,
          rates: exchangeRateTable
        });
      } catch (error) {
        setExchengeRatesData({
          state: "error",
          info: `${error}`
        });
      }
    })();

    setTimeout(getExchangeRatesData, 1000);
  }, []);

  return exchangeRatesData;
};
