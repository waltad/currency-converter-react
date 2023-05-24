import "./style.css";
import { useEffect, useState } from "react";

const Clock = () => {
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    }
  }, []);

  return (
    <p className="clock">
      Dzisiaj jest
      {" "}
      {newDate.toLocaleDateString(undefined, {
        month: "long", weekday: "long", day: "numeric"
      },)},
      {" "}
      {newDate.toLocaleTimeString()}
    </p>
  );
};

export default Clock;
