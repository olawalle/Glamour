import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './less/service.less'
import Display from '../shared/Display';

const Service = (props) => {

  let [ serviceSelected, setPickingStatus ] = useState(false);
  
  const addToSubscribedServices = (selectedService) => {
    let prevSeletedServices = [...props.userSubscribedServices]
    let check = prevSeletedServices.find(service => service.serviceName === selectedService.serviceName)
    
    if (check === undefined) {
      setPickingStatus(true)
      let newState = [...prevSeletedServices, selectedService]
      props.subscribeToService(newState)
    }
  }

  const removeSubscribedServices = (selectedService) => {
    let prevSeletedServices = [...props.userSubscribedServices]
    let newArr = prevSeletedServices.filter(service => service.serviceName !== selectedService.serviceName)
    if (newArr.length < prevSeletedServices.length) {
      setPickingStatus(false)
      props.subscribeToService(newArr)
    }
  }

  const showAdd = () => {
    if (serviceSelected) {
      return <img src="../static/icons/success.svg" onClick={() => removeSubscribedServices(props.userServices)} className="addService" alt=""/>
    } else {
      return <img src="../static/icons/add.svg" onClick={() => addToSubscribedServices(props.userServices)} className="addService" alt=""/>
    }
  }

  useEffect(() => {
    props.subscribeToService([])
  }, [])

  return (
    <>
    <Display if={props.isEmpty}>
      <div className="servicesChildWrap">
          <div className="emptyState">
              <img src="/static/icons/empty_service.svg" alt=""/>
              <p>
              This provider has no services added.
              </p>
          </div>
      </div>
    </Display>

    {
      !props.isEmpty ?
      <div className="service">
        <Grid>
          <Grid.Row>
              <Grid.Column  mobile={16} tablet={10} computer={10} largeScreen={10} widescreen={10}>
                <p className="serviceTitle">
                  {props.userServices.serviceName}
                </p>
                <p className="serviceDesc">
                  {props.userServices.description}
                </p>
                <p className="serviceDuration">
                  <img src="../static/icons/clock.svg" alt=""/> {props.userServices.duration}
                </p>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={3} largeScreen={3} widescreen={3}>
                <p className="serviceCost">
                  £{props.userServices.amount}
                </p>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={3} largeScreen={3} widescreen={3}>
                {
                  showAdd()
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>      
      </div> : null
    }
    </>
  )
}


const mapStateToProps = (state) => ({
  userSubscribedServices: state.subscribedServices.subscribedServices
})

export default connect(mapStateToProps, actions)(Service)
