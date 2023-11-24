/**
 * This will be a page for notifications to appear in
 *  
 *  
 *  
 *  
 *  
 *  
 * 
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="Notifications">
      <header className="header">
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
        <h1>Notifications</h1>
      </header>
      <section className="Notifications-section">
        <div className="Notifications-header">
          <h3>Notifications</h3>
        </div>
      </section>
      {

      }
    </div>
  );
};

export default Notifications;