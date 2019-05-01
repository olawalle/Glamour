import React from 'react';
// import ReminderIcon from '../../static/appointment_reminders.svg';
import { Image } from 'semantic-ui-react';

const EmptyState = () => {
  return (
    <div className="is-v-centered full">
      <Image className="notifications-icon" size="tiny" src="/static/images/appointment_reminders.svg" />
      <p className="mt-10">No notifications yet</p>
    </div>
  );
}

export default EmptyState;