import { useState } from "react";
import { Fieldset, Legend, StyledForm, TextLabel, Input, Label, Button } from "./styled";
import { currencyTable } from "../currencytable";
import Clock from "../Clock";

const Form = ({ calculateResult }) => {
  const [newValue, setNewValue] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(newValue, currency);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        <Clock />
        <p>
          <Label>
            <TextLabel>
              Podaj wartość w PLN:
            </TextLabel>
            <Input
              value={newValue}
              onChange={({ target }) => setNewValue(target.value)}
              required
              type="number" min="0" max="1000000" step="0.01"
            />
          </Label>
        </p>
        <p>
          <Label>
            <TextLabel>
              Wybierz walutę:
            </TextLabel>
            <Input as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencyTable.map((valueDate => (
                <option
                  key={valueDate.name}
                  value={valueDate.name}
                >
                  {valueDate.name}
                </option>
              )))}
            </Input>
          </Label>
        </p>
      </Fieldset>
      <p>
        <Button>
          Zawierdź
        </Button>
      </p>
    </StyledForm>
  )
};

export default Form;