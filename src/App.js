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
  const [result, setResult] = useState({});

  const calculateResult = (amount, name) => {
    const rate = currencyTable.find(value => value.name === name).rate;
    setResult({value: +amount, outcome: +amount / rate, currency: name});
  };
  
  return (
    <Container>
      <Form
        calculateResult={calculateResult}
      />
      <ResultBox
        result={result}
      />
    </Container>
  );
}

export default App;
