import "./style.css";
import { useEffect, useState } from "react";

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
    <p className="clock">
      Dzisiaj jest
      {" "}
      {formatDate(newDate)}
    </p>
  );
};

export default Clock;
