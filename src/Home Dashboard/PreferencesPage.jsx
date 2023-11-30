import React, { useState } from 'react';
import './PeferencesPage.css';
import TimeSlotSelector from './TimeSlotSelector';
import Navbar from './Navbar';

const PreferencesPage = () => {
  const [smoking, setSmoking] = useState('');
  const [pets, setPets] = useState('');
  const [stops, setStops] = useState('');
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTimeSelection = (time) => {
    setSelectedTimes((prevTimes) => [...prevTimes, time]);
  };

  return (
    <div className="container">
      <h1>Preferences</h1>
      
      {/* Smoking */}
      
      <div>
        <h2>Smoking:</h2>
        <div>
          <button
            onClick={() => setSmoking('Yes')}
            className={smoking === 'Yes' ? 'selected' : ''}
          >
            Yes
          </button>
          <button
            onClick={() => setSmoking('No')}
            className={smoking === 'No' ? 'selected' : ''}
          >
            No
          </button>
        </div>
      </div>
      
      {/* Pets */}
      
      <div>
        <h2>Pets:</h2>
        <div>
          <button
            onClick={() => setPets('Yes')}
            className={pets === 'Yes' ? 'selected' : ''}
          >
            Yes
          </button>
          <button
            onClick={() => setPets('No')}
            className={pets === 'No' ? 'selected' : ''}
          >
            No
          </button>
        </div>
      </div>
      
      {/* Stops */}
      
      <div>
        <h2>Stops:</h2>
        <div>
          <button
            onClick={() => setStops('Yes')}
            className={stops === 'Yes' ? 'selected' : ''}
          >
            Yes
          </button>
          <button
            onClick={() => setStops('No')}
            className={stops === 'No' ? 'selected' : ''}
          >
            No
          </button>
        </div>
      </div>

      <h1>Availability</h1>
      
      {/* Available Times */}
      
      <TimeSlotSelector/>
      <Navbar/>

      {/* Selected Times */}
      
      <div className="selected-times">
        <h2>Selected Times:</h2>
        <ul>
          {selectedTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreferencesPage;