import "./style.css";

const ResultBox = ({ result }) => (
  <p className="resultBox">
    Za <span>{result.value ? (result.value).toFixed(2) : 0}</span> PLN kupisz
    <span> {result.outcome ? (result.outcome).toFixed(2) : "N/A"} {result.currency}</span>
  </p>
);

export default ResultBox;