import Form from "./Container/Form";
import Result from "./Container/Result";
import Container from "./Container";
import { useState } from "react";
import { useExchangeRatesData } from "./useExchangeRatesData";

function App() {
  const [result, setResult] = useState({});
  const exchangeRatesData = useExchangeRatesData();
  const currenciesTable = exchangeRatesData.rates;

  const calculateResult = (amount, name) => {
    const rate = currenciesTable.find(value => value.name === name).rate;
    setResult({
      value: +amount,
      outcome: +amount * rate,
      currency: name
    });
  };

  return (
    <Container>
      <Form
        calculateResult={calculateResult}
        exchangeRatesData={exchangeRatesData}
        currenciesTable={currenciesTable}
      />
      <Result
        result={result}
      />
    </Container>
  );
}

export default App;
