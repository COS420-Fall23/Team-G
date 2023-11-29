import React, { useState } from 'react';
import './PeferencesPage.css';

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
      
      <div>
        <h2>Select Available times:</h2>
        <button onClick={() => handleTimeSelection('8:00 AM')}>8 AM</button>
        <button onClick={() => handleTimeSelection('9:00 AM')}>9 AM</button>
        <button onClick={() => handleTimeSelection('10:00 AM')}>10 AM</button>
        <button onClick={() => handleTimeSelection('11:00 AM')}>11 AM</button>
        <button onClick={() => handleTimeSelection('12:00 PM')}>12 PM</button>
        <button onClick={() => handleTimeSelection('1:00 PM')}>1 PM</button>
        <button onClick={() => handleTimeSelection('2:00 PM')}>2 PM</button>
        <button onClick={() => handleTimeSelection('3:00 PM')}>3 PM</button>
        <button onClick={() => handleTimeSelection('4:00 PM')}>4 PM</button>
        <button onClick={() => handleTimeSelection('5:00 PM')}>5 PM</button>
        <button onClick={() => handleTimeSelection('6:00 PM')}>6 PM</button>
      </div>

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