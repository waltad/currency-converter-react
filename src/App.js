import Form from "./Form";
import ResultBox from "./ResultBox";
import Container from "./Container";
import { useState } from "react";

function App() {
  const currencyTable = [
    {name: "EUR", rate: 4.6286},
    {name: "USD", rate: 4.2151},
    {name: "GBP", rate: 5.2428},
  ];
  const [result, setResult] = useState(0);
  const [currencyRate, setCurrencyRate] = useState([{}]);

  const chooseCurrency = (name) => {
    setCurrencyRate(currencyRate => currencyRate = currencyTable.filter(value => value.name === name));
  };

  const calculateResult = (amount, name) => {
    chooseCurrency(name);
    setResult(result => result = +amount / currencyRate[0].rate);
  };
  
  return (
    <Container>
      <Form
        calculateResult={calculateResult}
      />
      <ResultBox
        result={result}
        currencyRate={currencyRate}
      />
    </Container>
  );
}

export default App;
