import "./style.css";

const ResultBox = ({ newValue, result, currencyRate }) => (
  <p className="resultBox">
    Za <span>{newValue ? newValue : 0}</span> PLN kupisz <span>{result ? result : "N/A"} {currencyRate[0].name}</span>
  </p>
);

export default ResultBox;