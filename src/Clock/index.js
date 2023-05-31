import { useEffect, useState } from "react";
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
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {formatDate(newDate)}
    </StyledClock>
  );
};

export default Clock;
