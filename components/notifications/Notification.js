import React from 'react';
import { List, Image, Header, Button, Divider, Grid } from 'semantic-ui-react';
import './less/notification.less';
import dayjs from 'dayjs'
import Display from '../shared/Display';
import Router from 'next/router'



const Notification = (props) => {

  let styles = {};
  if (props.unseen) {
    styles = {
      borderLeft: '4px solid black'
    }
  }

  const leaveReview = (from) => {
   props.setIsWritingReview(true);
   props.updateReview({
     user: from
   })
  }

  const viewBooking = (id) => {
    console.log(id)
    Router.push('/bookings?id='+id)
  }

  return (
    <>
      {/* <List.Item style={styles} className="notification pl-30">
        <List.Content className="p5" floated='right'>
          <Button onClick={leaveReview} className="h60 fw900" basic>Leave review</Button>
        </List.Content>
        <Image className="h40 is-round" src={props.from.userPhoto} />
        <List.Content className="pl-10">
          <Header as="h4">
            <strong className="fw900">
              {props.from.name} { ' ' }
            </strong>
            <span className="is-grey">
              {props.notification.body}
            </span>
          </Header>
          <p className="is-grey">{dayjs(props.createdAt).format('D MMM, YYYY')}</p>
        </List.Content>

      </List.Item> */}
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} style={{padding: '25px 2px'}}>
            <Image className="h40 is-round" src={props.from.userPhoto} style={{ marginRight: '5px', float: 'right' }}/>
          </Grid.Column>
          <Grid.Column width={10} style={{padding: '25px 2px'}}>
              <strong className="fw900">
                {props.from.name} { ' ' }
              </strong>
              <span className="is-grey">
                {props.notification.body}
              </span>
            <p className="is-grey">{dayjs(props.notification.createdAt).format('DD MMM, YYYY')}</p>
          </Grid.Column>
          <Display if={props.user.role === "client"}>
            
            <Grid.Column width={4} style={{padding: '25px 10px'}}>
              <Button className="h60 fw900" basic onClick={() => leaveReview(props.from)}>Leave review</Button>
            </Grid.Column>

          </Display>
          <Display if={props.user.role === "provider"}>
            
            <Grid.Column width={4} style={{padding: '25px 10px'}}>
              <Button onClick={() => viewBooking(props.notification.bookingId)} className="h60 fw900" basic>View booking</Button>
            </Grid.Column>

          </Display>
        </Grid.Row>
      </Grid>
      <Divider />
    </>
  );
}

export default Notification;