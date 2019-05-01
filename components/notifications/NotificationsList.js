import React from 'react';
import { List } from 'semantic-ui-react';
import Notification from './Notification';

const NotificationsList = (props) => {
  return (
    <List className="notification-list mt-30" divided verticalAlign='middle'>
      {
        props.notifications.map((notification, index) => (
          <Notification key={index} { ...notification }/>
        ))
      }
    </List>
  );
}

export default NotificationsList;