
import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './less/homeService.less'

const HomeService = (props) => {

  let [ serviceSelected, setPickingStatus ] = useState(false);
  
//   const addToSubscribedServices = (selectedService) => {
//     setPickingStatus(true)
//     props.subscribeToService(selectedService)
//   }

//   const removeSubscribedServices = (selectedService) => {
//     setPickingStatus(false)
//     props.unSubscribeToService(selectedService.title)
//   }

  return (
    <div className="homeService">
      <Grid stackable>
        <Grid.Row>
            <Grid.Column width={12}>
              <p className="serviceTitle">
                Title of service
              </p>
              <p className="serviceDesc">
                Brief description of the service goes here. Must go faster... go, go, go, go, go! Remind me to thank John.
              </p>
              <p className="serviceCost">
              £40
              </p>
              <p className="serviceDuration">
                <img src="../static/icons/clock.svg" alt=""/> 30mins - 1hr
              </p>
            </Grid.Column>
            <Grid.Column width={2} className="">
              <p className="dot online">
                .
              </p>
            </Grid.Column>
            <Grid.Column width={2} className="myrow">
              <img src="/static/icons/edit.svg" alt=""/>
            </Grid.Column>
          </Grid.Row>
        </Grid>      
    </div>
  )
}

export default connect(null, actions)(HomeService)
