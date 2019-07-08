import React, { useState, useEffect } from 'react'
import { Grid, Container } from 'semantic-ui-react';
import InnerNav from '../components/shared/InnerNav';
import withMasterLayout from './layouts/withMasterLayout';
import * as actions from '../store/actions'
import { connect } from 'react-redux';
import Router from 'next/router'
import './less/account.less'
import SideNav from './account/sideNav';
import PersonalDetails from './account/PersonalDetails';
import Display from '../components/shared/Display';
import {getUserAddresses} from '../services/generatData.ts'


const Account = (props) => {

//   const [userRole, updateUserRole] = useState('serviceprovider')
  const [activeComponent, updateActiveComponent ] = useState(<PersonalDetails role={props.userRole} />)
  const updateActiveComponent_ = (component) => {
    updateActiveComponent(component)
  }

  useEffect(() => {
    if (!window.sessionStorage.getItem('glamourToken')) {
        Router.push('/login')
    }
  }, [])

  return (
    <div className="accountComponent">
      <InnerNav userRole={props.userRole}/>
      <Container>
        <Grid>
            <Grid.Row>
            <Grid.Column  mobile={16} tablet={16} largeScreen={5} widescreen={5} textAlign="center">
                <div className="lightShadow leftWing">
                    <Display if={props.userRole === 'provider'}>
                        <div className="leftWingTop">
                            <div className="userPhoto">
                                <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                <img className="userFace" src={props.user.pictureUrl} alt=""/>
                            </div>
                            <p className="userName">
                                {
                                    props.user.fullname
                                }
                            </p>
                            <p className="jobDesc">
                                Massage, Make up
                            </p>
                            <p className="userDesc">
                                Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. 
                            </p>
                        </div>
                    </Display>
                    
                    <Display if={props.userRole === 'client'}>
                        <div className="leftWingTop">
                            <div className="userPhoto">
                                <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                <img className="userFace" src={props.user.pictureUrl} alt=""/>
                            </div>
                            <p className="userName">
                                {
                                    props.user.fullname
                                }
                            </p>
                            {/* <p className="userDesc">
                                Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. 
                            </p> */}
                            <p className="location">
                                <img src="/static/icons/grey-map-marker.svg" alt=""/> South East London
                            </p>
                        </div>
                    </Display>

                    <SideNav role={props.userRole} updateActiveComponent={updateActiveComponent_} />
                </div>
            </Grid.Column>
            <Grid.Column  mobile={16} tablet={16} largeScreen={11} widescreen={11}>
                <div className="lightShadow rightWing">
                    {
                        activeComponent
                    }
                </div>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userRole: state.user.role,
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Account))
