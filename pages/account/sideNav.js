import React, { useState, useEffect } from 'react'
import ManageSubscriptions from '../account/ManageSubscriptions';
import ManagePayments from '../account/ManagePayments';
import PersonalDetails from '../account/PersonalDetails';
import BusinessDetails from '../account/BusinessDetails'
import AddressForm from '../../components/shared/AddressForm';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Grid } from 'semantic-ui-react';
import AddressBook from './addressBook';
import SavedServiceProviders from './savedServiceProviders';
import Router from 'next/router';
import UserCards from './UserCards';
import LookBook from './LookBook';

const SideNav = (props) => {    
  

  useEffect(() => {
    if (Router.router.query.child) pickRoute(Router.router.query.child)
  }, [])

  // const [activeComponent, updateActiveComponent ] = useState(<PersonalDetails role={props.role} />)
  const [providerLinks, updateproviderLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails role={props.role} />,
        active: 'active',
        icon: '/static/icons/personalDetails.svg',
        route: ''
    },
    {
        text: 'Business details',
        component: <BusinessDetails />,
        active: 'inactive',
        icon: '/static/icons/briefcase.svg',
        route: ''
    },
    {
        text: 'Manage subscriptions',
        component: <ManageSubscriptions subscriptions={props.availableSubscriptions} />,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg',
        route: ''
    },
    {
        text: 'Manage payments',
        component: <ManagePayments />,
        active: 'inactive',
        icon: '/static/icons/card.svg',
        route: ''
    },
    {
        text: 'Upload Lookbook',
        component: <LookBook />,
        active: 'inactive',
        icon: '/static/icons/card.svg',
        route: ''
    }
  ])
  
  const [clientLinks, updateclientLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails role={props.role} />,
        active: 'active',
        icon: '/static/icons/personalDetails.svg'
    },
    {
        text: 'Address book',
        component: <AddressBook />,
        active: 'inactive',
        icon: '/static/icons/addressbook.svg'
    },
    {
        text: 'Payment methods and invoices',
        component: <UserCards showAdd={false} />,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg'
    },
    {
        text: 'Saved service providers',
        component: <SavedServiceProviders />,
        active: 'inactive',
        icon: '/static/icons/filled-heart.svg'
    }
  ])

  const pickRoute = (route) => {
    let selectedComponent = {}
    if (props.role === 'client') {
      selectedComponent = clientLinks.forEach(link => {
        link.text.toLowerCase() === route.toLowerCase() ? activateLink_(i) : null
      })
      // props.updateActiveComponent(selectedComponent.component)
    } else {
      selectedComponent = providerLinks.forEach((link, i) => {
        link.text.toLowerCase() === route.toLowerCase() ? activateLink(i) : null
      })
      // props.updateActiveComponent(selectedComponent.component)
    }
  }

  const renderLinks = () => {
    if(props.role === 'client') {
      return clientLinks.map((link, i) => {
        return <li className={link.active} key={`link${i}`} onClick={() => activateLink_(i)}><img src={link.icon} alt=""/> {link.text}</li>
      })
    } else {
      return providerLinks.map((link, i) => {
          return <li className={link.active} key={`link${i}`} onClick={() => activateLink(i)}><img src={link.icon} alt=""/> {link.text}</li>
        })
    }
  }
  
  const activateLink = (i) => {
    let newLinks = providerLinks.map((link, n) => {
      if (n === i) {
        return {...link, active: 'active'}
      } else {
        return {...link, active: ''}
      }
    })
    updateproviderLinks(newLinks)
    props.saveActiveComponent(providerLinks[i].text)
  }
  
  const activateLink_ = (i) => {
    let newLinks = clientLinks.map((link, n) => {
      if (n === i) {
        return {...link, active: 'active'}
      } else {
        return {...link, active: ''}
      }
    })
    updateclientLinks(newLinks)
    props.saveActiveComponent(clientLinks[i].text)
  }

  const logout = () => {
    let payload = {
      isLoggedIn: false
    }
    window.sessionStorage.removeItem('glamourToken')
    props.saveUserData(payload)
    Router.push('/login')
  }

  return (
    <>
      <ul className="sidelinks mobile hidden">
          {renderLinks()}
          <li className="logout" onClick={() => logout()}><img src='/static/icons/logout.svg' alt=""/>Log out</li>
      </ul>            
    </>
  )
}

const mapStateToProps = (state) => {
  return {
      subscriptions: state.subscriptions
  }
}

export default connect(mapStateToProps, actions)(SideNav)
