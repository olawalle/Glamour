import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';
import EmptyState from '../shared/EmptyState';
import Display from '../shared/Display';
import BookingsList from './BookingsList';
import './less/bookings.less';
// import { Icon } from 'antd';
// import Router from 'next/router';

const Bookings = (props) => {

  return (
    <Segment
      className='bookings h760'
    >
        <Container>
          <Grid centered columns={1}>
            <Grid.Row>
              <Grid.Column
                className=''
                mobile={16}
                tablet={12}
                largeScreen={11}
                widescreen={11}
              >
                <Card className="bookings-card h690 mb-30" fluid>
                  <Card.Content
                    className='bookings-content'
                  >
                    <Card.Header className="is-flex">
                      <h2 className="has-font-freight mt-30 mb-30 pl-10">
                        Bookings
                      </h2>
                    </Card.Header>
                    <Display if={props.userBookings.length === 0}>
                      <EmptyState
                        icon="/static/images/nobookings.svg"
                        text="You have not made any booking yet"
                      />
                    </Display>
                    <Display if={props.userBookings.length > 0}>
                      <BookingsList
                        fetchData={props.fetchData}
                        role={props.role}
                        // { ...props.userBookings.reverse()}
                      />
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

export default Bookings;