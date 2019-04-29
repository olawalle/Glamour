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
    height: '50px'
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
          <Image style={styles.Image} src='/static/images/logo.svg' size='small' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Link href="/serviceproviders">
            <Menu.Item as='a'>Services</Menu.Item>
          </Link>
          <Link href="/aboutus">
            <Menu.Item as='a'>About Us</Menu.Item>
          </Link>
          <Link href="/signup/provider">
            <Menu.Item as='a'>Become a provider</Menu.Item>
          </Link>
          <Link href="/login">
            <Menu.Item as='a'>Log in</Menu.Item>
          </Link>
          <Link href="/signup">
            <Menu.Item as='div'>
              <Button style={styles.signUp} size="huge" secondary>Sign up</Button>
            </Menu.Item>
          </Link>
          <Menu.Item as='a'>
            <Image style={styles.basket} src='/static/images/basket.svg' size='mini' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;