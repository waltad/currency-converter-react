import Form from "./Form";
import ResultBox from "./ResultBox";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState([
    {key: "EUR", rate: 4.6286},
    {key: "USD", rate: 4.2151},
    {key: "GBP", rate: 5.2428},
  ]);
  const calculateResult = (newAmount) => {

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
