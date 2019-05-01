import React from 'react';
import { Menu, Image, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';

const styles = {
  signUp: {
    borderRadius: '0px',
    height: '49px',
    width: '120px'
  },
  basket: {
    height: '28px'
  },
  Menu: {
    marginBottom: '0px'
  },
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

const Navbar = () => {
  return (
    <Menu
      borderless
      style={styles.Menu}
      className="navbar"
      // fixed="top"
    >
      <Container >
        <Menu.Item>
          <Link href="/home">
            <Image style={styles.Image} src='/static/images/logo.svg' size='small' />
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Link href="/serviceproviders">
            <Menu.Item as='a'>Services</Menu.Item>
          </Link>
          <Link href="/aboutus">
            <Menu.Item  className="mobile hidden" position='right' as='a'>About Us</Menu.Item>
          </Link>
          {/* <Link href="/signup/provider">
            <Menu.Item className="mobile hidden" position='right' as='a'>Become a provider</Menu.Item>
          </Link>
          <Link href="/login">
            <Menu.Item position='right' as='a'>Log in</Menu.Item>
          </Link>
          <Link href="/signup">
            <Menu.Item className="mobile hidden" as='div'>
              <Button style={styles.signUp} size="huge" secondary>Sign up</Button>
            </Menu.Item>
          </Link> */}
          <Menu.Item style={styles.UserIconWrap} as='a'>
            <Image style={styles.UserIcon} src='/static/images/team/teammember1.png' size='mini' /> Melissa Moe
          </Menu.Item>
          <Menu.Item className="mobile hidden" as='a'>
            <Image style={styles.basket} src='/static/images/basket.svg' size='mini' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;