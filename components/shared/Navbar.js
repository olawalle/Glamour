import React from 'react';
import { Menu, Image, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getUserData } from '../../store'
import './less/navbar.less';
import Display from './Display';

const styles = {
  Image: {
    height: '50px',
    cursor: 'pointer'
  },
  UserIconWrap: {
    background: '#fafafa',
    padding: '0.92857143em 2.4em'
  },
  UserIcon: {
    margin: '0 10px',
    borderRadius: '50%',
  }
}


const Navbar = (props) => {
  return (
    <Menu
      borderless
      className="navbar mb-0"
      // fixed="top"
    >
      <Container >
        <Menu.Item>
          <Link href="/">
            <Image className="logo" src='/static/icons/logo.svg' size='small' />
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Link href="/serviceproviders">
            <Menu.Item as='a'>Services</Menu.Item>
          </Link>
          <Link href="/aboutus">
            <Menu.Item  className="mobile hidden" position='right' as='a'>About us</Menu.Item>
          </Link>

          {/* links to be shown if user is not logged in */}
          <Display if={!props.userData.isLoggedIn}>
              <Link href="/signup/provider">
                <Menu.Item className="mobile hidden" position='right' as='a'>Become a provider</Menu.Item>
              </Link>
              <Link href="/login">
                <Menu.Item position='right' as='a'>Log in</Menu.Item>
              </Link>
              <Link href="/signup">
                <Menu.Item className="mobile hidden" as='div'>
                  <Button className="navbar-signup-btn" size="huge" secondary>Sign up</Button>
                </Menu.Item>
              </Link>
          </Display>

          {/* links to be shown if a client is logged in */}
          <Display if={props.userData.isLoggedIn && props.userData.role === 'client'}>
            <Link href="/account">
              <Menu.Item className="mobile hidden cursor" as='div'>
                <Image style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
              </Menu.Item>
            </Link>
            
            <Link href="/cart">
              <Menu.Item className="mobile hidden cursor" as='div'>
                <Image style={styles.UserIcon} src='/static/images/basket.svg' size='mini' />
              </Menu.Item>
            </Link>

          </Display>

          {/* links to be shown if a provider logs in */}
          <Display if={props.userData.isLoggedIn && props.userData.role !== 'client'}>
          
            <Link href="/provider/home">
              <Menu.Item className="mobile hidden" as='div'>
                <Image style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
              </Menu.Item>
            </Link> 
                        
          </Display> 
          
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  userData: getUserData(state)
})

export default connect(mapStateToProps)(Navbar);