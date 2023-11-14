import React, { useState } from 'react';

const AvailabilitySection = () => {
  const [timeSlots, setTimeSlots] = useState([

    { time: "8:00 AM", selected: false },
    { time: "9:00 AM", selected: false },
    { time: "10:00 AM", selected: false },
    { time: "11:00 AM", selected: false },
    { time: "12:00 PM", selected: false },
    { time: "1:00 PM", selected: false },
    { time: "2:00 PM", selected: false },
    { time: "3:00 PM", selected: false },
    { time: "4:00 PM", selected: false },
    { time: "5:00 PM", selected: false },
    { time: "6:00 PM", selected: false },
    { time: "7:00 PM", selected: false },
    // Add more time slots as needed
  ]);

  const toggleSelection = (index) => {
    setTimeSlots(prevTimeSlots => {
      const updatedTimeSlots = [...prevTimeSlots];
      updatedTimeSlots[index].selected = !updatedTimeSlots[index].selected;
      return updatedTimeSlots;
    });
  };

  return (
    <div>
      <h2>Availability</h2>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`time-slot ${slot.selected ? 'selected' : ''}`}
            onClick={() => toggleSelection(index)}
          >
            {slot.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilitySection;