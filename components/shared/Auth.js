import React, { Component } from 'react';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';
import Link from 'next/link'

const styles = {
  Segment: {
    // margin: '0px',
    background: '#020202',
    minHeight: '100vh',
    backgroundImage: 'url("/static/images/auth.png")',
    backgroundSize: 'cover'
  }
}

const Auth = ({ children }) => {
  return (
    <Segment style={styles.Segment} vertical>
      <Container textAlign='center'>
        {children}
      </Container>
    </Segment>
   );
}

export default Auth;
