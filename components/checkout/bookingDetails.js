import React from 'react'

import './less/bookingDetails.less'
import { Button, Grid } from 'semantic-ui-react';

function BookingDetails(props) {
  const kk = () => {
    console.log(props)
  }
  return (
    <>
    <div className="bookingDetails">
      <p className="usersName">
          Booking Details
      </p>
      <p>
      <Grid className="userDetailsWrap">
        <Grid.Row>
          <Grid.Column width={3}>
            <img src="/static/images/team/teammember1.png" className="userImage" alt=""/>
          </Grid.Column>
          <Grid.Column width={13}>
            <p className="name">
              Mary Jane
            </p>
            <p className="userDetails">
              <img src="/static/icons/clock.svg" alt=""/> 08:00pm Today
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="bookService__title__amount">Title of service <span>£34</span></div>
      <div className="bookService__title__amount">Title of service <span>£34</span></div>
      <div className="bookService__title__amount">Title of service <span>£34</span></div>
          <div className="bookService__title__amount_total">Total <span>£100</span></div>
      </p>
      {
        props.children
      }
      <p className="caveat">
        Your payment will be held securely until service is fulfilled
      </p>
    </div>
    </>
  )
}

export default BookingDetails
