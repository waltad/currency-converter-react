import Form from "./Form";
import ResultBox from "./ResultBox";
import Container from "./Container";
import { currencyTable } from "./currencytable";
import { useState } from "react";

function App() {
  const [result, setResult] = useState({});

  const calculateResult = (amount, name) => {
    const rate = currencyTable.find(value => value.name === name).rate;
    setResult({
      value: +amount,
      outcome: +amount / rate,
      currency: name
    });
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
