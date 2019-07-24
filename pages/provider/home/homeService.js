
import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './less/homeService.less'

const HomeService = (props) => {

  // useEffect(() => {
  //   console.log(props)
  // }, [])

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
                {props.service ? props.service.serviceName : ''}
              </p>
              <p className="serviceDesc">
                {props.service ? props.service.description : ''}
              </p>
              <p className="serviceCost">
              £{props.service ? props.service.amount : ''}
              </p>
              <p className="serviceDuration">
                <img src="../static/icons/clock.svg" alt=""/> {props.service ? props.service.duration : ''}
              </p>
            </Grid.Column>
            <Grid.Column width={2} className="">
              {
                props.service && props.service.status === "active" ? <p className="dot online">
                  .
                </p> : <p className="dot offline">
                  .
                </p>
              }
            </Grid.Column>
            <Grid.Column width={2} className="myrow">
              <img src="/static/icons/edit.svg" onClick={props.openEdit} style={{cursor: 'pointer'}} title="edit" alt=""/>
            </Grid.Column>
          </Grid.Row>
        </Grid>      
    </div>
  )
}

export default connect(null, actions)(HomeService)
