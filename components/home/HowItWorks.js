import React from 'react';
import { Header, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Step from './Step';
import './less/howItWorks.less';

const steps = [
  {
    header: '01. Choose your service',
    subHeader: "My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about.",
    image: "/static/images/how it works/choose_your_service.svg"
  },
  {
    header: '02. Choose a time and date',
    subHeader: "Life finds a way. Do you have any idea how long it takes those cups to decompose.",
    image: "/static/images/how it works/choose_a_time_and_date.svg"
  },
  {
    header: '03. Select service provider',
    subHeader: "Remind me to thank John for a lovely weekend. Just my luck, no ice. Hey, you know how I'm, like, always trying.",
    image: "/static/images/how it works/select_a_service_provider.svg"
  },
  {
    header: '04. Book service',
    subHeader: "I was part of something special. Do you have any idea how long it takes those cups to decompose.",
    image: "/static/images/how it works/book_service.svg"
  },
];

const HowItWorks = (props) => {
  return (
    <Segment className="howItWorks">
      <Container>
        <Header className="howItWorks-header" textAlign="center" as="h4">
          How it works
        </Header>
        <Grid stackable columns={4}>
          <Grid.Row columns={4}>
            {
              steps.map((step, index) => (
                <Step key={index} {...step} />
              ))
            }
          </Grid.Row>
        </Grid>
        <div className="is-v-centered">
          <Button secondary content="Explore services" />
        </div>
      </Container>
    </Segment>
   );
}


export default HowItWorks;