// NotificationComponent.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationComponent from './NotificationComponent';

describe('NotificationComponent', () => {
  const notificationWithOptionalFeature = {
    id: 1,
    title: 'Test Title',
    message: 'Test Message',
    hasOptionalFeature: true,
  };

  const notificationWithoutOptionalFeature = {
    id: 2,
    title: 'Test Title 2',
    message: 'Test Message 2',
    hasOptionalFeature: false,
  };

  it('renders notification component with optional feature when hasOptionalFeature is true', () => {
    const { getByText } = render(
      <NotificationComponent notification={notificationWithOptionalFeature} />
    );

    const acceptButton = getByText('Accept');
    const declineButton = getByText('Decline');

    expect(acceptButton).toBeInTheDocument();
    expect(declineButton).toBeInTheDocument();
  });

  it('renders notification component without optional feature when hasOptionalFeature is false', () => {
    const { getByText, queryByText } = render(
      <NotificationComponent notification={notificationWithoutOptionalFeature} />
    );

    const acceptButton = queryByText('Accept');
    const declineButton = queryByText('Decline');

    expect(acceptButton).toBeNull();
    expect(declineButton).toBeNull();

    const dismissButton = getByText('Dismiss');
    expect(dismissButton).toBeInTheDocument();
  });

  // Add more test cases for other functionalities as needed
});
