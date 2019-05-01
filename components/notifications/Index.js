import React from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';
import EmptyState from './EmptyState';
import Display from '../shared/Display';
import NotificationList from './NotificationsList';

const Index = (props) => {
  console.log(props);
  return (
    <Segment className="notifications">
      <Container>
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={11} largeScreen={11} widescreen={11}>
              <Card className="notifications-card mb-70" fluid>
                <Card.Content className="notification-content">
                  <Card.Header>
                    <h2 className="has-font-freight mt-30 pl-20">Notifications</h2>
                  </Card.Header>

                  <Display if={!props.notifications.length}>
                    <EmptyState />
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

export default Index;