import Form from "./Form";
import ResultBox from "./ResultBox";
import Container from "./Container";
import Background from "./Background";

function App() {
  return (
    <Background>
      <Container>
        <Form />
        <ResultBox />
      </Container>
    </Background>
  );
}

export default App;
