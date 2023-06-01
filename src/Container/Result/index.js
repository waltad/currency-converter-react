import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    Za <span>{result.value ? (result.value).toFixed(2) : 0}</span> PLN kupisz
    <span> {result.outcome ? (result.outcome).toFixed(2) : "N/A"} {result.currency}</span>
  </StyledResult>
);

export default Result;