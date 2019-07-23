import React from 'react';
import { List } from 'semantic-ui-react';
import Notification from './Notification';
import './less/notificationsList.less';

const NotificationsList = (props) => {
  return (
    <List className="notification-list mt-30" style={{overflow: 'hidden'}} divided verticalAlign='middle'>
      {
        props.notifications.map((notification, index) => (
          <Notification key={index} { ...notification } {...props}/>
        ))
      }
    </List>
  );
}

export default NotificationsList;