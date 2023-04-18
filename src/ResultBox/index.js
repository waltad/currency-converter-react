import "./style.css";

const ResultBox = ({ newAmount }) => (
  <p className="resultBox">
    Za <span>{newAmount}</span> PLN kupisz <span> N/A </span>
  </p>
);

export default ResultBox;