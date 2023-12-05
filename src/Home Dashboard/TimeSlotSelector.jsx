import React, { useState } from 'react';
import './TimeSlotSelector.css';

// Define the different states for a time slot
const timeSlotStates = ['', 'traveling to', 'traveling home'];

const TimeSlotSelector = () => {
  // Create a state to hold the schedule
  const [schedule, setSchedule] = useState({});

  // Function to handle the clicking of a time slot
  const toggleTimeSlot = (day, time) => {
    const key = `${day}-${time}`;
    // Get the current state of the time slot
    const currentStateIndex = schedule[key] || 0;
    // Calculate the next state
    const nextStateIndex = (currentStateIndex + 1) % timeSlotStates.length;
    // Update the schedule state with the next state
    setSchedule({
      ...schedule,
      [key]: nextStateIndex,
    });
  };

  // Function to determine the class for the time slot
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

  // Create an array of times
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

  // Create an array of days
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="time-slot-selector-container">
      <div className="time-labels">
        {/* Render the time labels */}
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
                      onClick={() => toggleTimeSlot(day, time)}
                    >
                      {/* Render the state text or icon here */}
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
