import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import _ from 'lodash'

import './less/nav.less';


export default class InnerNav extends Component {
  state = { activeItem: 'Home' }

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
            <Menu.Item
              className="is-h-centered listItem"
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            >
              <img src="/static/icons/home.svg" className="linkIcon" alt=""/> <span className="mobile hidden"> Home</span>
            </Menu.Item>
            <Menu.Item
              name='Notifications'
              className="is-h-centered listItem"
              active={activeItem === 'Notifications'}
              onClick={this.handleItemClick}
            >
              <span className="notif">.</span>
              <img src="/static/icons/bell.svg" className="linkIcon" alt=""/> <span className="mobile hidden">Notifications</span>
            </Menu.Item>
            <Menu.Item
              name='Messages'
              className="is-h-centered listItem"
              active={activeItem === 'Messages'}
              onClick={this.handleItemClick}
            >
              <span className="notif">.</span>
              <img src="/static/icons/messages.svg" className="linkIcon" alt=""/>  <span className="mobile hidden">Messages</span>
            </Menu.Item>
            <Menu.Item
              name='My Bookings'
              className="is-h-centered listItem"
              active={activeItem === 'My Bookings'}
              onClick={this.handleItemClick}
            >
              <span className="notif">.</span>
              <img src="/static/icons/bookings.svg" className="linkIcon" alt=""/>  <span className="mobile hidden">My Bookings</span>
            </Menu.Item>
            <Menu.Item
              name='Account'
              className="is-h-centered listItem"
              active={activeItem === 'Account'}
              onClick={this.handleItemClick}
            >
              <img src="/static/icons/account.svg" className="linkIcon" alt=""/> <span className="mobile hidden"> Account</span>
            </Menu.Item>
          </Menu>
        </Sticky>
      </div>
    )
  }
}
