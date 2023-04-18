import { useState } from "react";
import "./style.css";

const Form = ({ calculateResult }) => {
  const [newAmount, setNewAmount] = useState(0);
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(newAmount, currency);
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznie wartości EUR</legend>
        <p>
          <label>
            <span className="form__labelText">
              Podaj wartość w PLN:
            </span>
            <input
              value={newAmount}
              onChange={({ target }) => setNewAmount(target.value)}
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
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">
          Zawierdź
        </button>
      </p>
    </form>
  )
};

export default Form;