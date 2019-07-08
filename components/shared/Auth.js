import React, { Component, useEffect } from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Auth = ({ children }) => {
  console.log(children)
  useEffect(() => {
    let token = window.sessionStorage.getItem('glamourToken')
    console.log(token)
  }, [])
  return (
    <Segment className="auth" vertical>
      <Container textAlign='center'>
        {children}
      </Container>
    </Segment>
   );
}

export default Auth;
