import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    // Calculate the time remaining until the launch date
    const timeRemaining = launchDate - new Date();

    // Convert the time remaining to days, hours, minutes, and seconds
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Set the state with the calculated values
    setDays(daysRemaining);
    setHours(hoursRemaining);
    setMinutes(minutesRemaining);
    setSeconds(secondsRemaining);

    // Create an interval to update the countdown every second
    const interval = setInterval(() => {
      // Calculate the new time remaining
      const newTimeRemaining = launchDate - new Date();

      // Convert the new time remaining to days, hours, minutes, and seconds
      const newDaysRemaining = Math.floor(newTimeRemaining / (1000 * 60 * 60 * 24));
      const newHoursRemaining = Math.floor((newTimeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutesRemaining = Math.floor((newTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const newSecondsRemaining = Math.floor((newTimeRemaining % (1000 * 60)) / 1000);

      // Set the state with the new calculated values
      setDays(newDaysRemaining);
      setHours(newHoursRemaining);
      setMinutes(newMinutesRemaining);
      setSeconds(newSecondsRemaining);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  const launchDate = new Date("2024-03-08T00:00:00"); // Declare the 'launchDate' variable

  return (
    <div className="construction-container">
      <h1>Site Under Construction</h1>
      <p>
        We are working hard to launch our new site. Please come back on{" "}
        {launchDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        at {launchDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}.
      </p>
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value">{days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default App
