const notificationsData = {
    // Define notifications for different users based on their 'uid'
    userNotifications: {
      // Notifications for user with uid: 'user1'
      user1: [
        {
          id: 1,
          title: 'User 1 Notification 1',
          message: 'Welcome, User 1! This is a specific notification for you.',
          hasOptionalFeature: false,
        },
        {
          id: 2,
          title: 'User 1 Notification 2',
          message: 'Another notification for User 1.',
          hasOptionalFeature: false,
        },
      ],
      // Notifications for user with uid: 'user2'
      user2: [
        {
          id: 1,
          title: 'User 2 Notification 1',
          message: 'Hello, User 2! This is a specific notification for you.',
          hasOptionalFeature: false,
        },
        {
          id: 2,
          title: 'User 2 Notification 2',
          message: 'Another notification for User 2.',
          hasOptionalFeature: false,
        },
      ],
      // Define more notifications for other users based on their 'uid' if needed
      // ...
    },
  };
  
  export default notificationsData;