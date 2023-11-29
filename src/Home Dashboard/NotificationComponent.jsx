// NotificationComponent.jsx

import React from 'react';
import './NotificationComponent.css'; // Import the CSS file for styling

const NotificationComponent = ({ notification }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        <h3>{notification.title}</h3>
        <p>{notification.message}</p>
      </div>
    </div>
  );
};

export default NotificationComponent;
