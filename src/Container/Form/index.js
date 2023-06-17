import { useState } from "react";
import { Fieldset, Legend, TextLabel, Input, Button, Loading, Error, InfoAboutRates } from "./styled";
import Clock from "./Clock";

export const Form = ({ calculateResult, exchangeRatesData, currenciesTable }) => {
  const [newValue, setNewValue] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(newValue, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {exchangeRatesData.state === "loading" ?
        (
          <Loading>Ładuję tebelę kursów</Loading>
        ) :
        exchangeRatesData.state === "error" ? (
          <Error>
            Wystąpił błąd: "{exchangeRatesData.info}".<br />
            Sprawdź połączenie z internetem
          </Error>
        ) :
        (
          <>
            <Fieldset>
              <Legend>Przelicznik walut</Legend>
              <Clock />
              <p>
                <label>
                  <TextLabel>Podaj wartość w PLN:</TextLabel>
                  <Input
                    value={newValue}
                    onChange={({ target }) => setNewValue(target.value)}
                    required
                    type="number"
                    min="0"
                    max="1000000"
                    step="0.01"
                  />
                </label>
              </p>
              <p>
                <label>
                  <TextLabel>Wybierz walutę:</TextLabel>
                  <Input
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {currenciesTable.map((valueDate) => (
                      <option key={valueDate.name} value={valueDate.name}>
                        {valueDate.name}
                      </option>
                    ))}
                  </Input>
                </label>
              </p>
              <InfoAboutRates>
                Kursy pobrano ze strony: https://exchangerate.host<br />
                Aktualne na dzień: <strong>{exchangeRatesData.date}</strong>
              </InfoAboutRates>
            </Fieldset>
            <p>
              <Button>Zawierdź</Button>
            </p>
          </>
        )}
    </form>
  );
};

export default Form;
