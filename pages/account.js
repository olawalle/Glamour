import React, { useState } from 'react'
import { Grid, Container } from 'semantic-ui-react';
import InnerNav from '../components/shared/InnerNav';
import withMasterLayout from './layouts/withMasterLayout';
import './less/account.less'
import SideNav from './account/sideNav';
import PersonalDetails from './account/PersonalDetails';
import Display from '../components/shared/Display';


const Account = () => {

  const [userRole, updateUserRole] = useState('serviceprovider')
  const [activeComponent, updateActiveComponent ] = useState(<PersonalDetails role={userRole} />)
  const updateActiveComponent_ = (component) => {
    updateActiveComponent(component)
  }
  return (
    <div className="accountComponent">
      <InnerNav userRole={userRole}/>
      <Container>
        <Grid>
            <Grid.Row>
            <Grid.Column  mobile={16} tablet={16} largeScreen={5} widescreen={5} textAlign="center">
                <div className="lightShadow leftWing">
                    <Display if={userRole === 'serviceprovider'}>
                        <div className="leftWingTop">
                            <div className="userPhoto">
                                <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                <img className="userFace" src="/static/images/team/teammember1.png" alt=""/>
                            </div>
                            <p className="userName">
                                Mary Jane
                            </p>
                            <p className="jobDesc">
                                Massage, Make up
                            </p>
                            <p className="userDesc">
                                Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. 
                            </p>
                        </div>
                    </Display>
                    
                    <Display if={userRole === 'client'}>
                        <div className="leftWingTop">
                            <div className="userPhoto">
                                <img src="/static/icons/edit_.svg" className="edit" alt=""/>
                                <img className="userFace" src="/static/images/team/teammember1.png" alt=""/>
                            </div>
                            <p className="userName">
                                Melissa McCarthy
                            </p>
                            <p className="userDesc">
                                Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. 
                            </p>
                            <p className="location">
                                <img src="/static/icons/grey-map-marker.svg" alt=""/> South East London
                            </p>
                        </div>
                    </Display>

                    <SideNav role={userRole} updateActiveComponent={updateActiveComponent_} />
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

export default (withMasterLayout)(Account)
