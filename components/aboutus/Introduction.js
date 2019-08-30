import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import './less/introduction.less';

const Introduction = () => {
  return (
    <Container className="aboutus--introduction">
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column className="introduction-text" mobile={16} tablet={7} computer={8} largeScreen={8} widescreen={8}>
            <p className="mt-0">
              Glamour on Demand / Grooming on Demand (G.O.D) marketplace facilitate users to find and book freelance mobile beauty and grooming professionals from a searchable database that is consumer-focused and easy to use while assisting business owners to level up, take control and grow their businesses (from one user at a time). 
            </p>
            <h1>
              Our mission
            </h1>
            <p>
            To empower you to be the best version of yourself everyday by creating:
            </p>
            <ul>
              <li>
                <b>Accessibility</b> – attainable glamour for every day people
              </li>
              <li>
                <b>Control</b> – access to beauty treatments that fit around your lifestyle and schedule. 
              </li>
              <li>
                <b>Inclusivity</b> – a range of treatments suited to individuals from all walks of life across all ethnic groups. 
              </li>
              <li>
                <b>Revolutionaries</b> – to change the delivery of beauty services. 
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={9} computer={8} largeScreen={8} widescreen={8}>
            <Image className="introduction-img" src="/static/images/aboutusintroductionimg.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
   );
}

export default Introduction;