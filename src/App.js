import Form from "./Form";
import Result from "./Result";
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
      <Result
        result={result}
      />
    </Container>
  );
}

export default App;
