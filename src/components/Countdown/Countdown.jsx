import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("June 25, 2022 00:00:00").getTime();
      const today = new Date().getTime();

      const timeDiff = endDate - today;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
    };

    setInterval(countdown, 1000);
  }, []);
  return (
    <div className="d-flex">
      <div className="home__countdonwn-ct">
        <h2>{days}</h2>
        <p>Days</p>
      </div>
      <div className="home__countdonwn-ct">
        <h2>{hours}</h2>
        <p>Hours</p>
      </div>
      <div className="home__countdonwn-ct">
        <h2>{minutes}</h2>
        <p>Minutes</p>
      </div>
      <div className="home__countdonwn-ct">
        <h2>{seconds}</h2>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
