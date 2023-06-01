import { useCurrentDate } from "../useCurrentDate";
import { StyledClock } from "./styled";

const formatDate = (date) => `
  ${date.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
  })}
  ${date.toLocaleTimeString()}
`;

const Clock = () => {
  const date = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </StyledClock>
  );
};

export default Clock;
