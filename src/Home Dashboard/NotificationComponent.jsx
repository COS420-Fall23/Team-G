// NotificationComponent.jsx

import React, { useState } from 'react';
import './NotificationComponent.css';

const NotificationComponent = ({ notification, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) {
      onDismiss(notification.id); // Pass the notification id to the parent component for dismissal
    }
  };

  return (
    !dismissed && (
      <div className="notification-container">
        <div className="notification">
          <button className="dismiss-button" onClick={handleDismiss}>
            Dismiss
          </button>
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </div>
      </div>
    )
  );
};

export default NotificationComponent;
