import React from 'react';
import { Header, Container, Segment, Grid } from 'semantic-ui-react';
import Services from './Services';
import Service from './Service';
import './less/beautyServices.less';


const BeautySerivces = (props) => {
  return (
    <Segment className="beautyServices">
      <Container>
        <Header className="beautyServices-header" textAlign="center" as="h4">
          Discover Grooming Services
        </Header>
        <Services columns={3}>
          {
            props.beautyServices.map((serviceGroup, index) => (
              <Grid.Row key={index}>
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