import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import Router from 'next/router';
import Link from 'next/link';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'

import './less/nav.less'
import Display from './Display';
import { getUserData } from '../../store';
import { getStatus } from '../../services/auth.ts'


class InnerNav extends Component {
  state = {
    activeItem: 'Home',
    navStatus: {
      bookings: false,
      message: false,
      notification: false
    },
    links: [
      {
        text: 'Home',
        image: '/static/icons/home.svg',
        to: '/provider/home',
        hasNotif: null,
        for: 'provider'
      },
      {
        text: 'Home',
        image: '/static/icons/home.svg',
        to: '/serviceproviders',
        hasNotif: null,
        for: 'client'
      },
      {
        text: 'Notifications',
        image: '/static/icons/bell.svg',
        to: '/notifications',
        hasNotif: 'notification',
        for: 'all'
      },
      {
        text: 'Messages',
        image: '/static/icons/messages.svg',
        to: '/messages',
        hasNotif: 'message',
        for: 'all'
      },
      {
        text: 'My Bookings',
        image: '/static/icons/bookings.svg',
        to: '/bookings',
        hasNotif: 'bookings',
        for: 'all'
      },
      {
        text: 'Account',
        image: '/static/icons/account.svg',
        to: '/account',
        hasNotif: false,
        for: 'all'
      }
    ]
  }

  componentDidMount() {
    getStatus()
    .then(res => {
      this.setState({
        navStatus: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })

    this.setState({ activeItem: this.state.links.find(link => link.to === Router.router.route).text})
  }

  renderLinks = () => {
    return this.state.links.map((link, i) => {
      if (link.for === this.props.userData.role || link.for === 'all') {
        return <Link href={link.to}
              key={`link${i}`}> 
              <Menu.Item 
                className="is-h-centered listItem" 
                name={link.text} 
                key={`key${i}`}
                active={this.state.activeItem === link.text} 
                onClick={() => this.handleItemClick(link.text)}
                >
                <Display if={this.state.navStatus[link.hasNotif]}>
                  <span className="notif">.</span>
                </Display>
                <img src={link.image} className="linkIcon" alt=""/> 
                <span className="mobile hidden">{link.text}</span>
              </Menu.Item>
            </Link>
      }
    })
  }

  handleItemClick = (name) => {
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <div className="innerNav mobile hidden">
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

const mapStateToProps = (state) => ({
  userData: getUserData(state)
})


export default connect(mapStateToProps, actions)(InnerNav);
