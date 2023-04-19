import Form from "./Form";
import ResultBox from "./ResultBox";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [currencyRate, setCurrencyRate] = useState([
    {key: "EUR", rate: 4.6286},
    {key: "USD", rate: 4.2151},
    {key: "GBP", rate: 5.2428},
  ]);
  const [result, setResult] = useState(0);

  const chooseCurrency = (key) => {
    setCurrencyRate(currencyRate => currencyRate.filter(value => value.key === key));
  };

  const calculateResult = (amount, key) => {
    chooseCurrency(key);
    setResult(result => result = amount / currencyRate.rate);
  };
  
  return (
    <Container>
      <Form
        calculateResult={calculateResult}
      />
      <ResultBox />
    </Container>
  );
}

export default App;
