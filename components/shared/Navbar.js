import React from 'react';
import { Menu, Image, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';
import { connect } from 'react-redux';
import './less/navbar.less';

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


const showSomeLinks = (props) => {
  if (!props.isLoggedIn) {
    return (
      <>
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
      </>
    )
  } else {
    return (
      <Menu.Item style={styles.UserIconWrap} as='a'>
        <Image style={styles.UserIcon} src='/static/images/team/teammember1.png' size='mini' /> Melissa Moe
      </Menu.Item>
    )
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
          <Link href="/home">
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
          {showSomeLinks(props)}
          <Menu.Item className="mobile hidden" as='a'>
            <Image className="navbar-basket-img h28" src='/static/images/basket.svg' size='mini' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.login.isLoggedIn
})

export default connect(mapStateToProps)(Navbar);