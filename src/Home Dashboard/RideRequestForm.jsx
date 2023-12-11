import React, { useState } from 'react';
import './RideRequestForm.css';
import Navbar from './Navbar'; // import Navbar if defined in a separate file
import { useNavigate } from 'react-router-dom';

const RideRequestForm = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [headingTo, setHeadingTo] = useState('');
  const [desiredHour, setDesiredHour] = useState('');
  const [desiredMinute, setDesiredMinute] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();

  // Display message
  const message = "Request submitted";
  alert(message);
  
  // Clear inputs
  setLeavingFrom('');
  setHeadingTo('');
  setDesiredHour('');
  setDesiredMinute('');
};

  const handleContinue = () => {
    // Add logic to continue to drivers
    navigate("/AvailableDrivers")
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const hours = Array.from(Array(12).keys());
  const minutes = Array.from(Array(60).keys());

  const summary = (
    <div className="summary">
      <h2>Summary</h2>
      <p>Leaving from: {leavingFrom}</p>
      <p>Heading to: {headingTo}</p>
      <p>Desired time: {desiredHour.toString().padStart(2, "0")}:{desiredMinute.toString().padStart(2, "0")}</p>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leavingFrom">Leaving from</label>
          <select id="leavingFrom" value={leavingFrom} onChange={(e) => setLeavingFrom(e.target.value)}>
            <option value="" disabled>Select a location</option>
            <option value="Fogler Lbrary">Fogler Lbrary</option>
            <option value="Neville Hall">Neville Hall</option>
            <option value="Barrows Hall">Barrows Hall</option>
            <option value="Donald P. Corbett Building">Donald P. Corbett Building</option>
            <option value="Ferland Engineering Education and Design Center">Ferland Engineering Education and Design Center</option>
            <option value="Murray Hall">Murray Hall</option>
            <option value="Estabrook Hall">Estabrook Hall</option>
            <option value="Williams Hall">Williams Hall</option>
            <option value="Dunn Hall">Dunn Hall</option>
            <option value="Lord Hall">Lord Hall</option>
            <option value="Nutting Hall">Nutting Hall</option>
            <option value="Boardman Hall">Boardman Hall</option>
            <option value="Boudreau Hall">Boudreau Hall</option>
            <option value="Crosby Hall">Crosby Hall</option>
            <option value="The Ave">The Ave</option>
            <option value="Orchard Trails">Orchard Trails</option>
            <option value="The Reserve">The Reserve</option>
          </select>
        </div>
        <div>
          <label htmlFor="headingTo">Heading to</label>
          <select id="headingTo" value={headingTo} onChange={(e) => setHeadingTo(e.target.value)}>
            <option value="" disabled>Select a location</option>
            <option value="Fogler Lbrary">Fogler Lbrary</option>
            <option value="Neville Hall">Neville Hall</option>
            <option value="Barrows Hall">Barrows Hall</option>
            <option value="Donald P. Corbett Building">Donald P. Corbett Building</option>
            <option value="Ferland Engineering Education and Design Center">Ferland Engineering Education and Design Center</option>
            <option value="Murray Hall">Murray Hall</option>
            <option value="Estabrook Hall">Estabrook Hall</option>
            <option value="Williams Hall">Williams Hall</option>
            <option value="Dunn Hall">Dunn Hall</option>
            <option value="Lord Hall">Lord Hall</option>
            <option value="Nutting Hall">Nutting Hall</option>
            <option value="Boardman Hall">Boardman Hall</option>
            <option value="Boudreau Hall">Boudreau Hall</option>
            <option value="Crosby Hall">Crosby Hall</option>
            <option value="The Ave">The Ave</option>
            <option value="Orchard Trails">Orchard Trails</option>
            <option value="The Reserve">The Reserve</option>
          </select>
        </div>
        <div>
          <label htmlFor="desiredTime">Desired Time</label>
          <div className="time-selector">
            <select className="hour-select" value={desiredHour} onChange={(e) => setDesiredHour(e.target.value)}>
              <option value="" disabled>Select hour</option>
              {hours.map(hour => (
                <option key={hour} value={hour}>{hour.toString().padStart(2, "0")}</option>
              ))}
            </select>
            <select className="minute-select" value={desiredMinute} onChange={(e) => setDesiredMinute(e.target.value)}>
              <option value="" disabled>Select minute</option>
              {minutes.map(minute => (
                <option key={minute} value={minute}>{minute.toString().padStart(2, "0")}</option>
              ))}
            </select>
          </div>
        </div>
      <button onClick={handleContinue}>Continue to drivers</button>
        <button type="submit">Submit Ride Request</button>
      </form>
      {leavingFrom && headingTo && desiredHour && desiredMinute && summary}
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
      <Navbar />
    </div>
  );
};

export default RideRequestForm;