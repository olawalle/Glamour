import React from 'react'

import './less/bookingDetails.less'
import { Button, Grid } from 'semantic-ui-react';
import { getProviders } from '../../store'
import { connect } from 'react-redux';

function BookingDetails(props) {

  const renderList = (list) => {
    return list.map((item, i) => <div key={i} className="bookService__title__amount">{item.serviceName} <span>£{item.amount}</span></div>)
  }

  const total = (list) => {
    let total = 0
    list.forEach(item => {
      total += parseFloat(item.amount)
    });
    return total
  }

  return (
    <>
    <div className="bookingDetails">
      <p className="usersName">
          Booking Details
      </p>
      <div>
      <Grid className="userDetailsWrap">
        <Grid.Row>
          <Grid.Column width={3}>
            <img src={props.providerDetails.userPhoto} className="userImage" alt=""/>
          </Grid.Column>
          <Grid.Column width={13}>
            <p className="name">
              {props.providerDetails.name}
            </p>
            <p className="userDetails">
              <img src="/static/icons/clock.svg" alt=""/> 08:00pm Today
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {
        renderList(props.subscribedServices)
      }
      <div className="bookService__title__amount_total">Total <span>£{total(props.subscribedServices)}</span></div>
      </div>
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


const mapStateToProps = (state) => ({
  subscribedServices: state.subscribedServices.subscribedServices,
  providerDetails: state.subscribedServices.selectedProvider
})

export default connect(mapStateToProps)(BookingDetails)
