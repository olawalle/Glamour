import React, { useState } from 'react'
import { Grid, Container } from 'semantic-ui-react';
import InnerNav from '../components/shared/InnerNav';
import withMasterLayout from './layouts/withMasterLayout';
import './less/account.less'
import BusinessDetails from './account/BusinessDetails';
import PersonalDetails from './account/PersonalDetails';


const Account = () => {
  
  const renderLinks = () => {
    return sideLinks.map((link, i) => {
        return <li className={link.active} key={`link${i}`} onClick={() => activateLink(i)}><img src={link.icon} alt=""/> {link.text}</li>
    })
  }

  const activateLink = (i) => {
    let newLinks = sideLinks.map((link, n) => {
        if (n === i) {
            return {...link, active: 'active'}
        } else {
            return {...link, active: ''}
        }
    })
    updateSideLinks(newLinks)
    updateActiveComponent(sideLinks[i].component)
  }

  const [activeComponent, updateActiveComponent ] = useState(<PersonalDetails />)

  const [sideLinks, updateSideLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails />,
        active: 'active',
        icon: '/static/icons/personalDetails.svg'
    },
    {
        text: 'Busines details',
        component: <BusinessDetails />,
        active: 'inactive',
        icon: '/static/icons/briefcase.svg'
    },
    {
        text: 'Manage subscriptions',
        component: '',
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg'
    },
    {
        text: 'Manage payments',
        component: '',
        active: 'inactive',
        icon: '/static/icons/card.svg'
    },
    // {
    //     text: 'Log out',
    //     component: '',
    //     active: 'inactive',
    //     icon: '/static/icons/logout.svg'
    // },
  ])

  return (
    <div className="accountComponent">
      <InnerNav />
      <Container>
        <Grid>
            <Grid.Row>
            <Grid.Column width={5} textAlign="center">
                <div className="lightShadow leftWing">
                    <div className="leftWingTop">
                        <div className="userPhoto">
                            <img src="/static/images/team/teammember1.png" alt=""/>
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

                    <ul className="sidelinks">
                        {renderLinks()}
                        <li className="logout"><img src='/static/icons/logout.svg' alt=""/>Log out</li>
                    </ul>
                </div>
            </Grid.Column>
            <Grid.Column width={11}>
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
