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
  }

export default Clock;
