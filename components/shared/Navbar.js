import React from 'react';
import { Menu, List, Image, Button, Container } from 'semantic-ui-react'

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
    >
      <Container fluid>
        <Menu.Item>
          <Image style={styles.Image} src='/static/images/logo.svg' size='small' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a'>Services</Menu.Item>
          <Menu.Item as='a'>About Us</Menu.Item>
          <Menu.Item as='a'>Become a provider</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='div'>
            <Button style={styles.signUp} size="huge" secondary>Sign up</Button>
          </Menu.Item>
          <Menu.Item as='a'>
            <Image style={styles.basket} src='/static/images/basket.svg' size='mini' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;