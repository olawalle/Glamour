import React, { useState } from 'react'
import ManageSubscriptions from '../account/ManageSubscriptions';
import ManagePayments from '../account/ManagePayments';
import PersonalDetails from '../account/PersonalDetails';
import BusinessDetails from '../account/BusinessDetails'
import AddressForm from '../../components/shared/AddressForm';
import { Grid } from 'semantic-ui-react';
import AddressBook from './addressBook';
import SavedServiceProviders from './savedServiceProviders';
import UserCards from './UserCards';

export default function SideNav(props) {    
    
  const [activeComponent, updateActiveComponent ] = useState(<PersonalDetails role={props.role} />)
  const [providers, updateproviders] = useState(
    [
    {
        banner: '/static/images/services/hair.png',
        userPhoto: '/static/images/team/teammember1.png',
        name: 'Mary Sullivan',
        jobDesc: 'Makeup, Massage',
        description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
        stars: 3,
        id: '1',
        instant: true, 
        ratingsCount: 16,
        servicesRendered: [
          {
            title: 'something nice',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '1hr',
            price: '40'
          },
          {
            title: 'another nice',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '30mins - 1hr',
            price: '30'
          },
          {
            title: 'hair rolls tasks',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '1hr',
            price: '55'
          },
          {
            title: 'Basket making',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '1hr',
            price: '80'
          }
        ]
      },
      {
        banner: '/static/images/services/hair.png',
        userPhoto: '/static/images/team/teammember3.png',
        name: 'Joy Koke',
        jobDesc: 'Makeup, Massage',
        description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
        stars: 3,
        id: '2',
        instant: false, 
        ratingsCount: 12,
        servicesRendered: [
          {
            title: 'something nice',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '1hr',
            price: '40'
          },
          {
            title: 'another nice',
            desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
            duration: '30mins - 1hr',
            price: '30'
          }
        ]
      }
  ])

  const [sideLinks, updateSideLinks] = useState([
    {
        text: 'Personal details',
        component: <PersonalDetails role={props.role} />,
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
        component: <ManageSubscriptions />,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg'
    },
    {
        text: 'Manage payments',
        component: <ManagePayments />,
        active: 'inactive',
        icon: '/static/icons/card.svg'
    }
  ])
  
  const [sideLinks_, updateSideLinks_] = useState([
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
        component: <Grid>
          <Grid.Row className="cards">
            <Grid.Column width={8}>
              <UserCards showAdd={false} />
            </Grid.Column>
            <Grid.Column width={8}>
              <UserCards showAdd={true} />
            </Grid.Column>
          </Grid.Row>
        </Grid>,
        active: 'inactive',
        icon: '/static/icons/subscriptions.svg'
    },
    {
        text: 'Saved service providers',
        component: <SavedServiceProviders providers={providers} />,
        active: 'inactive',
        icon: '/static/icons/filled-heart.svg'
    }
  ])

  const renderLinks = () => {
    if(props.role === 'client') {
      return sideLinks_.map((link, i) => {
        return <li className={link.active} key={`link${i}`} onClick={() => activateLink_(i)}><img src={link.icon} alt=""/> {link.text}</li>
      })
    } else {
      return sideLinks.map((link, i) => {
          return <li className={link.active} key={`link${i}`} onClick={() => activateLink(i)}><img src={link.icon} alt=""/> {link.text}</li>
        })
    }
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
    props.updateActiveComponent(sideLinks[i].component)
  }
  
  const activateLink_ = (i) => {
    let newLinks = sideLinks_.map((link, n) => {
      if (n === i) {
        return {...link, active: 'active'}
      } else {
        return {...link, active: ''}
      }
    })
    updateSideLinks_(newLinks)
    props.updateActiveComponent(sideLinks_[i].component)
  }

  return (
    <>
      <ul className="sidelinks">
          {renderLinks()}
          <li className="logout"><img src='/static/icons/logout.svg' alt=""/>Log out</li>
      </ul>            
    </>
  )
}
