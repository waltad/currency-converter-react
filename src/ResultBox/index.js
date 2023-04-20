import "./style.css";

const ResultBox = ({ newValue }) => (
  <p className="resultBox">
    Za <span>{newValue ? newValue : 0}</span> PLN kupisz <span> N/A </span>
  </p>
);

export default ResultBox;