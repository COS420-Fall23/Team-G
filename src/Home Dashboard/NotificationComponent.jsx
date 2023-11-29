// NotificationComponent.jsx

import React, { useState } from 'react';
import './NotificationComponent.css';

const NotificationComponent = ({ notification, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);
  const [optionalFeatureAccepted, setOptionalFeatureAccepted] = useState(false);

  const { hasOptionalFeature } = notification;

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) {
      onDismiss(notification.id); // Pass the notification id to the parent component for dismissal
    }
  };

  const handleAccept = () => {
    setOptionalFeatureAccepted(true);
    // You can perform additional actions when the 'accept' button is clicked
  };

  const handleDecline = () => {
    setDismissed(true);
    // You can perform additional actions when the 'decline' button is clicked
  };

  return (
    !dismissed && (
      <div className="notification-container">
        <div className="notification">
          {hasOptionalFeature && !optionalFeatureAccepted ? (
            <div className="optional-feature">
              <button className="accept-button" onClick={handleAccept}>
                Accept
              </button>
              <button className="decline-button" onClick={handleDecline}>
                Decline
              </button>
            </div>
          ) : (
            <button className="dismiss-button" onClick={handleDismiss}>
              Dismiss
            </button>
          )}
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </div>
      </div>
    )
  );
};

export default NotificationComponent;
