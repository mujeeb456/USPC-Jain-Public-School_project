import React, { useState } from "react";
import "./SchoolInfo.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const getMonthName = (monthIndex) =>
    new Date(2026, monthIndex).toLocaleString("default", { month: "long" });

  const getDaysInMonth = (year, month) => {
    const total = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= total; i++) {
      days.push(i);
    }
    return days;
  };

  const prevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(newDate);
  };

  const year = date.getFullYear();
  const month = date.getMonth();
  const days = getDaysInMonth(year, month);

  // Figure out first day position (Sun = 0)
  const firstDayIndex = new Date(year, month, 1).getDay();
  const blankDays = Array(firstDayIndex).fill("");

  return (
    <div className="calendar">
      <h4>Event Calender</h4>

      <div className="calendar-month">
        <button onClick={prevMonth}>◀</button>
        <span style={{ margin: "0 10px" }}>
          {getMonthName(month)} {year}
        </span>
        <button onClick={nextMonth}>▶</button>
      </div>

      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="calendar-days-grid">
        {[...blankDays, ...days].map((day, i) => (
          <span key={i}>{day}</span>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
