import React, { useState } from 'react';
import './TimeSlotSelector.css';

const timeSlotStates = ['', 'traveling to', 'traveling home'];

const TimeSlotSelector = () => {
  const [schedule, setSchedule] = useState({});
  const [clearGrid, setClearGrid] = useState(false);

  const toggleTimeSlot = (day, time, clearGrid) => {
    if (clearGrid) {
      setSchedule({});
      setClearGrid(false);
      return;
    }

    const key = `${day}-${time}`;
    const currentStateIndex = schedule[key] || 0;
    const nextStateIndex = (currentStateIndex + 1) % timeSlotStates.length;
    setSchedule({
      ...schedule,
      [key]: nextStateIndex,
    });
  };

  const getTimeSlotClass = (stateIndex) => {
    switch (stateIndex) {
      case 1:
        return 'traveling-to';
      case 2:
        return 'traveling-home';
      default:
        return 'unavailable';
    }
  };

  const times = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleClearGrid = () => {
    setSchedule({});
    setClearGrid(true);
  };

  return (
    <div className="time-slot-selector-container">
      <div className="clear-button">
        <button onClick={handleClearGrid}>Clear Grid</button>
      </div>
      <div className="time-labels">
        {times.map((time) => (
          <div className="time-label" key={time}>
            {time}
          </div>
        ))}
      </div>
      <div className="scroll-container">
        <table className="time-slot-selector">
          <thead>
            <tr>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time}>
                {days.map((day) => {
                  const key = `${day}-${time}`;
                  return (
                    <td
                      key={key}
                      className={getTimeSlotClass(schedule[key])}
                      onClick={() => toggleTimeSlot(day, time, clearGrid)}
                    >
                      {timeSlotStates[schedule[key]]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeSlotSelector;