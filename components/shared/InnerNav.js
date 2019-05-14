import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import Router from 'next/router';
import Link from 'next/link';

import './less/InnerNav.less'
import Display from './Display';


export default class InnerNav extends Component {
  state = { 
    activeItem: 'Home',
    links: [
      {
        text: 'Home',
        image: '/static/icons/home.svg',
        to: '/provider/home',
        hasNotif: false
      },
      {
        text: 'Notifications',
        image: '/static/icons/bell.svg',
        to: '/notifications',
        hasNotif: true
      },
      {
        text: 'Messages',
        image: '/static/icons/messages.svg',
        to: '/messages',
        hasNotif: true
      },
      {
        text: 'My Bookings',
        image: '/static/icons/bookings.svg',
        to: '/bookings',
        hasNotif: true
      },
      {
        text: 'Account',
        image: '/static/icons/account.svg',
        to: '/account',
        hasNotif: false
      }
    ]
  }

  componentDidMount() {
    this.setState({ activeItem: this.state.links.find(link => link.to === Router.router.route).text})
  }

  renderLinks = () => {
    return this.state.links.map((link, i) => {
      return <Link href={link.to}
              key={`link${i}`}> 
              <Menu.Item 
                className="is-h-centered listItem" 
                name={link.text} 
                key={`key${i}`}
                active={this.state.activeItem === link.text} 
                onClick={() => this.handleItemClick(link.text)}
                >
                <Display if={link.hasNotif}>
                  <span className="notif">.</span>
                </Display>
                <img src={link.image} className="linkIcon" alt=""/> 
                <span className="mobile hidden">{link.text}</span>
              </Menu.Item>
            </Link>
    })
  }

  handleItemClick = (name) => {
    this.setState({ activeItem: name })
  }

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
