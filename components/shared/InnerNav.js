import React from 'react';
import './css/InnerNav.less'

const styles = {
  signUp: {
    borderRadius: '0px',
    height: '49px',
    width: '120px'
  },
  basket: {
    height: '20px',
    margin: '0 6px -4px 0px'
  },
  Menu: {
    marginBottom: '0px'
  },
  Image: {
    height: '50px',
    cursor: 'pointer'
  },
  List: {
      display: 'inline-block',
      width: '100%',
      padding: '0',
    //   height: '80px',
    //   lineHeight: '80px',
      marginTop: '-1px',
      background: '#FAFAFA'
  },
  ListItem: {
    display: 'inline-block',
    width: '20%',
    textAlign: 'center',
    height: '80px',
  },
  ListItemContents: {
    marginTop: '10px'
  },
  Para: {
    // marginTop: '-20px'
  },
  Notif: {
    color: '#E84671',
    height: '12px',
    fontSize: '60px',
    position: 'relative',
    right: '-10px',
    top: '-8px'
  }
}


let links = [
    {link: 'Home', icon: '/static/icons/home.svg', is: 'active'},
    {link: 'Notifications', icon: '/static/icons/bell.svg', is: ''},
    {link: 'Messages', icon: '/static/icons/messages.svg', is: ''},
    {link: 'My Bookings', icon: '/static/icons/bookings.svg', is: ''},
    {link: 'Account', icon: '/static/icons/account.svg', is: ''},
]

const activate = (i) => {
    console.log(i)
    links.map(link => link.is = '')
    links[i].is = 'active'
    renderLinks()
    console.log(links)
}

const renderLinks = () => {
    return links.map((link, i) => {
        return <li style={styles.ListItem} key={'list'+i} className={link.is} onClick={() => activate(i)}>
                    <div style={styles.ListItemContents}>
                        <span style={styles.Notif}>.</span>
                        <span style={styles.Para}>
                            <img style={styles.basket} src={link.icon} size='mini' />
                            {link.link}
                        </span>
                    </div>
                </li>
    })
}

const InnerNav = () => {
  return (
    <>
        <ul style={styles.List}>
            {
                renderLinks()
            }
        </ul>
    </>
  );
}

export default InnerNav;