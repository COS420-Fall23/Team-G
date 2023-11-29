// NotificationComponent.test.js

import React from 'react';
import { render } from '@testing-library/react';
import NotificationComponent from './NotificationComponent';

describe('NotificationComponent', () => {
  const notificationData = {
    title: 'Test Title',
    message: 'Test Message',
  };

  it('renders notification component with provided data', () => {
    const { getByText } = render(<NotificationComponent notification={notificationData} />);
    
    const titleElement = getByText(notificationData.title);
    const messageElement = getByText(notificationData.message);

    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
