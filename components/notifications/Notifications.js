import React from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';
import EmptyState from '../shared/EmptyState';
import Display from '../shared/Display';
import NotificationList from './NotificationsList';
import './less/notifications.less';

const Notifications = (props) => {
  return (
    <Segment className="notifications">
      <Container>
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} largeScreen={11} widescreen={11}>
              <Card className="notifications-card mb-70" fluid>
                <Card.Content className="notification-content">
                  <Card.Header>
                    <h2 className="has-font-freight mt-30 pl-20">Notifications</h2>
                  </Card.Header>

                  <Display if={!props.notifications.length}>
                    <EmptyState icon="/static/images/appointment_reminders.svg" text="No notifications yet" />
                  </Display>
                  <Display if={props.notifications.length}>
                    <NotificationList { ...props } />
                  </Display>

                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Notifications;