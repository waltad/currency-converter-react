import { useState } from "react";
import "./style.css";
import { Fieldset, Legend, StyledForm } from "./styled";
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
          <label>
            <span className="form__labelText">
              Podaj wartość w PLN:
            </span>
            <input
              value={newValue}
              onChange={({ target }) => setNewValue(target.value)}
              className="form__field"
              required
              type="number" min="0" max="1000000" step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Wybierz walutę:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__field"
            >
              {currencyTable.map((valueDate => (
                <option
                  key={valueDate.name}
                  value={valueDate.name}
                >
                  {valueDate.name}
                </option>
              )))}
            </select>
          </label>
        </p>
      </Fieldset>
      <p>
        <button className="form__button">
          Zawierdź
        </button>
      </p>
    </StyledForm>
  )
};

export default Form;