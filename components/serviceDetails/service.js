import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './less/service.less'

const Service = (props) => {

  let [ serviceSelected, setPickingStatus ] = useState(false);
  
  const addToSubscribedServices = (selectedService) => {
    setPickingStatus(true)
    props.subscribeToService(selectedService)
  }

  const removeSubscribedServices = (selectedService) => {
    setPickingStatus(false)
    props.unSubscribeToService(selectedService.title)
  }

  const showAdd = () => {
    console.log(serviceSelected)
    if (serviceSelected) {
      return <img src="../static/icons/success.svg" onClick={() => removeSubscribedServices(props.userServices)} className="addService" alt=""/>
    } else {
      return <img src="../static/icons/add.svg" onClick={() => addToSubscribedServices(props.userServices)} className="addService" alt=""/>
    }
  }

  return (
    <div className="service">
      <Grid stackable>
        <Grid.Row>
            <Grid.Column width={10}>
              <p className="serviceTitle">
                {props.userServices.title}
              </p>
              <p className="serviceDesc">
                {props.userServices.desc}
              </p>
              <p className="serviceDuration">
                <img src="../static/icons/clock.svg" alt=""/> {props.userServices.duration}
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <p className="serviceCost">
                £{props.userServices.price}
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              {
                showAdd()
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>      
    </div>
  )
}

export default connect(null, actions)(Service)
