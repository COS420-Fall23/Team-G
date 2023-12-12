import React, { useState } from 'react';
import './RideRequestForm.css';
import Navbar from './Navbar'; // import Navbar if defined in a separate file
import { useNavigate } from 'react-router-dom';

const RideRequestForm = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [headingTo, setHeadingTo] = useState('');
  const [desiredHour, setDesiredHour] = useState('');
  const [desiredMinute, setDesiredMinute] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
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

    // Clear address
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
  };

  const handleContinue = () => {
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
      {leavingFrom === "Home" && (
        <div>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip Code: {zipCode}</p>
        </div>
      )}
    </div>
  );

  const ChangeStart = (value) => {
    setLeavingFrom(value)
    if(value==="Campus") setHeadingTo("Home");
    else if(value==="Home") setHeadingTo("Campus")
  }
  const ChangeEnd = (value) => {
    setHeadingTo(value)
    if(value==="Campus") setLeavingFrom("Home");
    else if(value==="Home") setLeavingFrom("Campus")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leavingFrom">Leaving from</label>
          <select id="leavingFrom" value={leavingFrom} onChange={(e) => ChangeStart(e.target.value)}>
            <option value="" disabled>Select a location</option>
            <option value="Campus">Campus</option>
            <option value="Home">Home</option>
          </select>
        </div>
        {leavingFrom === "Home" && (
          <div>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label htmlFor="state">State</label>
            <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
        )}
        <div>
          <label htmlFor="headingTo">Heading to</label>
          <select id="headingTo" value={headingTo} onChange={(e) => ChangeEnd(e.target.value)}>
            <option value="" disabled>Select a location</option>
            <option value="Campus">Campus</option>
            <option value="Home">Home</option>
          </select>
        </div>
        {headingTo === "Home" && (
          <div>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label htmlFor="state">State</label>
            <input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
        )}
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
