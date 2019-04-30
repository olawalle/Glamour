import React from 'react';
import { Header, Container, Segment, Grid } from 'semantic-ui-react';
import Services from './Services';
import Service from './Service';

const styles = {
  Segment: {
  },
  Header: {
    fontFamily: 'fontfreightproblack',
    margin: '34px 0px',
    marginBottom: '40px',
    fontSize: '32px'
  },
  Row: {
    marginBottom: '50px'
  },
  Container: {
  }
}

const BeautySerivces = (props) => {
  return (
    <Segment>
      <Container>
        <Header style={styles.Header} textAlign="center" as="h4">Discover beauty services</Header>
        <Services columns={3}>
          {
            props.beautyServices.map((serviceGroup, index) => (
              <Grid.Row key={index} style={styles.Row}>
                {
                  serviceGroup.map((service, index) => (
                    <Service key={index} {...service} />
                  ))
                }
              </Grid.Row>
            ))
          }
        </Services>
      </Container>
    </Segment>
   );
}

export default BeautySerivces;