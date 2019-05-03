// import React, { Component } from 'react';

// const styles = {
//   signUp: {
//     borderRadius: '0px',
//     height: '49px',
//     width: '120px'
//   },
//   basket: {
//     height: '20px',
//     margin: '0 6px -4px 0px'
//   },
//   Menu: {
//     marginBottom: '0px'
//   },
//   Image: {
//     height: '50px',
//     cursor: 'pointer'
//   },
//   List: {
//       display: 'inline-block',
//       width: '100%',
//       padding: '0',
//     //   height: '80px',
//     //   lineHeight: '80px',
//       marginTop: '-1px',
//       background: '#FAFAFA'
//   },
//   ListItem: {
//     display: 'inline-block',
//     width: '20%',
//     textAlign: 'center',
//     height: '80px',
//   },
//   ListItemContents: {
//     marginTop: '10px'
//   },
//   Para: {
//     // marginTop: '-20px'
//   },
//   Notif: {
//     color: '#E84671',
//     height: '12px',
//     fontSize: '60px',
//     position: 'relative',
//     right: '-10px',
//     top: '-8px'
//   }
// }

// class InnerNav extends Component{

//   links = [
//     {link: 'Home', icon: '/static/icons/home.svg', is: 'active'},
//     {link: 'Notifications', icon: '/static/icons/bell.svg', is: ''},
//     {link: 'Messages', icon: '/static/icons/messages.svg', is: ''},
//     {link: 'My Bookings', icon: '/static/icons/bookings.svg', is: ''},
//     {link: 'Account', icon: '/static/icons/account.svg', is: ''},
//   ]

//   renderLinks = () => {
//     return this.links.map((link, i) => {
//         return <li style={styles.ListItem} key={'list'+i} className={link.is} onClick={() => this.activate(i)}>
//           <div style={styles.ListItemContents}>
//               <span style={styles.Notif}>.</span>
//               <span style={styles.Para}>
//                   <img style={styles.basket} src={link.icon} size='mini' />
//                   {link.link}
//               </span>
//           </div>
//       </li>
//     })
//   }
//   activate = (i) => {
//     console.log(i)
//     this.links.map(link => link.is = '')
//     this.links[i].is = 'active'
//   }

//   render () {
//     return (
//       <>
//           <ul style={styles.List} className="innerNav">
//               {
//                 this.renderLinks()
//               }
//           </ul>
//       </>
//     );
//   }
// }

// export default InnerNav;

import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import './less/InnerNav.less'


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="innerNav">
      <Menu secondary>
        <Menu.Item  
          className="is-h-centered listItem" 
          name='Home' 
          active={activeItem === 'Home'} 
          onClick={this.handleItemClick}
        >
          <img src="/static/icons/home.svg" className="linkIcon" alt=""/> Home
        </Menu.Item>
        <Menu.Item
          name='Notifications'
          className="is-h-centered listItem"
          active={activeItem === 'Notifications'}
          onClick={this.handleItemClick}
        >
          <span className="notif">.</span>
          <img src="/static/icons/bell.svg" className="linkIcon" alt=""/> Notifications
        </Menu.Item>
        <Menu.Item
          name='Messages'
          className="is-h-centered listItem"
          active={activeItem === 'Messages'}
          onClick={this.handleItemClick}
        >
          <span className="notif">.</span>
          <img src="/static/icons/messages.svg" className="linkIcon" alt=""/> Messages
        </Menu.Item>
        <Menu.Item
          name='My Bookings'
          className="is-h-centered listItem"
          active={activeItem === 'My Bookings'}
          onClick={this.handleItemClick}
        >
          <span className="notif">.</span>
          <img src="/static/icons/bookings.svg" className="linkIcon" alt=""/> My Bookings
        </Menu.Item>
        <Menu.Item
          name='Account'
          className="is-h-centered listItem"
          active={activeItem === 'Account'}
          onClick={this.handleItemClick}
        >
          <img src="/static/icons/account.svg" className="linkIcon" alt=""/> Account
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}
