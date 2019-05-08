import React, { Component } from 'react'
import { Input, Menu, Sticky } from 'semantic-ui-react'
import _ from 'lodash'

import './less/InnerNav.less'


export default class InnerNav extends Component {
  state = { 
    activeItem: 'Home',
    links: [
      {
        text: 'Home',
        image: '/static/icons/home.svg',
        to: '',
        hasNotif: false
      },
      {
        text: 'Notifications',
        image: '/static/icons/bell.svg',
        to: '',
        hasNotif: false
      },
      {
        text: 'Messages',
        image: '/static/icons/messages.svg',
        to: '',
        hasNotif: false
      },
      {
        text: 'My Bookings',
        image: '/static/icons/bookings.svg',
        to: '',
        hasNotif: false
      },
      {
        text: 'Account',
        image: '/static/icons/account.svg',
        to: '',
        hasNotif: false
      }
    ]
  }

  // componentWillMount() {
  //   if(props.isProvider) {
  //     this.state.links = [
  //       {
  //         text: 'Home',
  //         image: '/static/icons/home.svg',
  //         to: ''
  //       },
  //       {
  //         text: 'Notifications',
  //         image: '/static/icons/bell.svg',
  //         to: ''
  //       },
  //       {
  //         text: 'Messages',
  //         image: '/static/icons/messages.svg',
  //         to: ''
  //       },
  //       {
  //         text: 'My Bookings',
  //         image: '/static/icons/bookings.svg',
  //         to: ''
  //       },
  //       {
  //         text: 'Account',
  //         image: '/static/icons/account.svg',
  //         to: ''
  //       }
  //     ]
  //   }
  // }

  renderLinks = () => {
    return this.state.links.map((link, i) => {
      return <Menu.Item  
      className="is-h-centered listItem" 
      name={link.text} 
      key={`key${i}`}
      active={this.state.activeItem === link.text} 
      onClick={this.handleItemClick}
      >
        <span className="notif">.</span>
        <img src={link.image} className="linkIcon" alt=""/> <span className="mobile hidden">{link.text}</span>
      </Menu.Item>
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div className="innerNav">
        <Sticky>
          <Menu secondary>
            {
              this.renderLinks()
            }
          </Menu>
        </Sticky>
      </div>
    )
  }
}
